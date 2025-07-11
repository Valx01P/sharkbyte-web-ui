'use client'

import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="w-screen h-screen center bg-red-300 relative overflow-hidden">
      {/* Pixel art background */}
      {/* <div className='pixel-bg-hero' /> */}
      <div className="flex">
        <div>
          <div>
            <Image
              src="/images/logo2.svg"
              alt="SharkByte Logo"
              width={200}
              height={200}
              priority
              className="w-40 h-auto bg-transparent"
            />
          </div>
          <p>
            Miami Dade College - Miami, FL
            <br />
            November 7th - 9th, 2025
          </p>
          <div className="">
            <Link href="/register" prefetch={false}>
              <h1 className="w-full bg-amber-500">Register</h1>
            </Link>
            <Link href="#schedule" scroll={true}>
              <h1 className="w-full bg-amber-50">Schedule</h1>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src="/images/placeholder.webp"
            alt="SharkByte Logo"
            width={200}
            height={200}
            priority
            className="w-40 h-auto bg-transparent"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
