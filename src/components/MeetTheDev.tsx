import React from 'react'

type MeetTheDevProps = {
  id?: string
}

const MeetTheDev: React.FC<MeetTheDevProps> = ({ id = 'about' }) => {
  return (
    <section id={id} className="container-screen mt-16 sm:mt-20">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-center gap-6 sm:gap-10 md:grid-cols-2">
          <div className="flex flex-col space-y-3 sm:space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-seagreen-900">Meet the Dev</h3>
            <p className="text-seagreen-900/90 leading-relaxed">
              Andrew Shaman is a veteran streamer, comedian, and $Seahorse developer. For over a decade, he’s built
              genuine connections while living on a couch at a friend’s house. Andrew merges his passion for streaming
              with blockchain innovation, never forgetting the supporters who shaped his journey. He proves that real
              community transcends the screen.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl shadow md:justify-self-end md:self-center w-full md:w-5/6 lg:w-4/5 xl:w-3/4 bg-seagreen-800/10">
            <img
              src="/dev.png"
              alt="Andrew Shaman at an event"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetTheDev

