'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const MDCSupportBanner = () => {
  const bannerRef = useRef(null)

  useEffect(() => {
    const banner = bannerRef.current
    if (!banner) return

    gsap.set(banner, { x: 0, opacity: 1 })

    ScrollTrigger.create({
      trigger: "#home",
      start: "top top-=1",
      end: "bottom+=100 center",
      onEnter: () => {
        // 🚀 YANK OFF FAST
        gsap.to(banner, {
          x: 200,          // shove it off faster
          opacity: 0,
          duration: 0.08,  // << make it basically instant
          ease: "expo.in"  // super strong acceleration
        })
      },
      onLeaveBack: () => {
        // SNAP BACK FAST
        gsap.fromTo(
          banner,
          { x: 200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.1,   // still snappy, slightly slower than leave
            ease: "expo.out" // quick, spring-like snap
          }
        )
      }
    })

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }, [])

  return (
    <a 
      ref={bannerRef}
      href='https://www.mdc.edu/'
      target="_blank"
      rel="noopener noreferrer"
      className="
        bg-gradient-to-b from-gray-950 via-gray-950 to-gray-800
        bg-[length:100%_200%] bg-bottom
        fixed flex justify-center items-center bottom-4 right-4
        transition-all duration-[1200ms] ease-in-out
        hover:bg-top
        text-white px-3 py-2.5 max-[1350px]:px-3 max-[1350px]:py-2.5
        rounded-lg z-30 border-3 border-gray-900
        pixel-shadow cursor-pointer
      "
    >
      <span className="text-[26px] font-medium max-[1350px]:text-[24px] max-[650px]:text-[18px]">
        supported by MDC 💙
      </span>
    </a>
  )
}

export default MDCSupportBanner
