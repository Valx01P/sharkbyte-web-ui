'use client'

import Image from 'next/image'

const Hero = () => {
  return (
    <section id='home' className="flex justify-start items-center w-screen h-screen relative overflow-hidden pixel-bg-hero">
      {/* CONTENT CONTAINER */}
      <div className="flex justify-around items-center w-full">

        {/* LEFT SIDE */}
        <div className="px-8 max-[650px]:px-3">
          {/* LOGO */}
          <div className="flex justify-center items-center z-10">
            <Image
              src="/svgs/logo.svg"
              alt="SharkByte Logo"
              width={200}
              height={200}
              priority
              className="w-40 h-auto bg-transparent max-[650px]:w-32 max-[420px]:w-[260px]"
            />
          </div>
          {/* CONTENT BLOCK */}
          <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white p-3 px-5 border-3 border-gray-600 pixel-shadow max-[1350px]:text-sm max-[650px]:text-xs max-[1350px]:py-2.5 max-[1350px]:px-4 max-[650px]:p-2 max-[650px]:px-3.5 max-[420px]:px-2">
            <p className="text-center flex-wrap max-[500px]:text-[22px]">
              MDC North Campus - Miami, FL
              <br />
              November 7th - 9th, 2025
            </p>
            <div className="m-2 max-[1350px]:m-1.5 max-[650px]:m-1 flex justify-center">
              <a
                href="https://airtable.com/appY1e4YbYhqNWdpE/shr5bPimkY7ck4v88"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <h1 className="relative w-full overflow-hidden bg-gradient-to-l from-[#6366f1] to-[#8b5cf6] px-3 max-[650px]:px-2 py-1 border-3 border-gray-600 pixel-shadow text-white">
                  <span className="relative z-20 block">Register</span>
                  <span className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 bg-gradient-to-r from-[#8b5cf6] to-[#6366f1]"></span>
                  <span className="pointer-events-none absolute -inset-y-3 left-[-100%] z-10 h-[200%] w-[50%] rotate-12 bg-white/30 transition-transform duration-600 ease-out group-hover:translate-x-[420%]"></span>
                </h1>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div />
        
      </div>
    </section>
  )
}

export default Hero
