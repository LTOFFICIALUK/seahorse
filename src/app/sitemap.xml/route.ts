import { NextResponse } from 'next/server'

// Required for static export
export const dynamic = 'force-static'

export async function GET() {
  const baseUrl = 'https://www.seahorsememe.xyz'
  
  // Use a fixed date for static export since it will be generated at build time
  const currentDate = new Date().toISOString()
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
