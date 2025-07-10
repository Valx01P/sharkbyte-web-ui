'use client'

import Image from 'next/image'

const Hero = () => {
  return (
    <section className="w-screen h-screen center bg-red-300 relative overflow-hidden">
      {/* Pixel art background */}
      {/* <div className='pixel-bg-hero' /> */}
      <div>
        <Image
          src="/images/logo2.svg"
          alt="SharkByte Logo"
          width={200}
          height={200}
          priority
          className='w-40 h-auto bg-transparent'
        />

      </div>

      
    </section>
  )
}

export default Hero