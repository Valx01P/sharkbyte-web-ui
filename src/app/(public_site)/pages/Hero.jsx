'use client'

import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="w-screen h-screen flex justify-start items-center bg-red-300 relative overflow-hidden pixel-bg-hero">
      <div className="flex w-full flex justify-around items-center">
        <div className="px-8">
          <div className="flex justify-center items-center">
            <Image
              src="/svgs/logo.svg"
              alt="SharkByte Logo"
              width={200}
              height={200}
              priority
              className="w-40 h-auto bg-transparent"
            />
          </div>
          {/* <div className="bg-white/80 backdrop-blur-md p-4 border-3 border-black pixel-shadow"> */}
          <div className="">
            <p className="text-center">
              Miami Dade College - Miami, FL
              <br />
              November 7th - 9th, 2025
            </p>
            <div className="">
              <Link href="/register" prefetch={false} className="group">
                <h1 className="relative w-full overflow-hidden bg-gradient-to-l from-[#fc78fb] to-[#ff99ff] px-3 border-3 pixel-shadow">
                  <span className="relative z-20 block">Register</span>
                  <span className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 bg-gradient-to-r from-[#ff99ff] to-[#fc78fb]"></span>
                  <span className="pointer-events-none absolute -inset-y-3 left-[-150%] z-10 h-[200%] w-[60%] rotate-45 bg-white/40 transition-transform duration-700 ease-out group-hover:translate-x-[350%]"></span>
                </h1>
              </Link>
              <Link href="#schedule" scroll={true}>
                <h1 className="w-full bg-white px-3 border-3 pixel-shadow">Schedule</h1>
              </Link>
            </div>
          </div>
        </div>
        <div />
      </div>
    </section>
  )
}

export default Hero
