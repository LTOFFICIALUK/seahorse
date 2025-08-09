import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'
import pngToIco from 'png-to-ico'

const projectRoot = new URL('..', import.meta.url).pathname
const publicDir = path.join(projectRoot, 'public')
const appDir = path.join(projectRoot, 'src', 'app')

const sourceWebp = path.join(publicDir, 'favicon.webp')
const outIco = path.join(appDir, 'favicon.ico')

async function ensureDirs() {
  await fs.mkdir(appDir, { recursive: true })
}

async function createPng(size) {
  const buffer = await sharp(sourceWebp)
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toBuffer()
  return buffer
}

async function main() {
  await ensureDirs()
  const sizes = [16, 32, 48, 64, 128, 256]
  const pngBuffers = await Promise.all(sizes.map(createPng))
  const ico = await pngToIco(pngBuffers)
  await fs.writeFile(outIco, ico)
  console.log(`Generated ${outIco}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

