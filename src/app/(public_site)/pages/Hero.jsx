'use client'

import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="w-screen h-screen center-left bg-red-300 relative overflow-hidden pixel-bg-hero">
      <div className="flex w-full center-spaced">
        <div>
          <div>
            <Image
              src="/svgs/logo2.svg"
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
        <div />
      </div>
    </section>
  )
}

export default Hero
