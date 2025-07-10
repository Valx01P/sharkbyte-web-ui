'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Hero from './pages/Hero'
import Stats from './pages/Stats'
import About from './pages/About'
import Schedule from './pages/Schedule'
import Faq from './pages/Faq'
import Sponsors from './pages/Sponsors'
import SponsorsCTA from './pages/SponsorsCTA'
import Team from './pages/Team'
import Socials from './pages/Socials'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const HERO_TO_STATS_TRACK_REF = useRef(null)
  const HERO_TO_STATS_RAIL_REF = useRef(null)
  const SPONSORS_TO_TEAMS_TRACK_REF = useRef(null)
  const SPONSORS_TO_TEAMS_RAIL_REF = useRef(null)

  useEffect(() => {
    const scrollSpace1 = HERO_TO_STATS_TRACK_REF.current // the container to scroll in (the trigger)
    const scrollViewBox1 = HERO_TO_STATS_RAIL_REF.current // the visible scrolling view (moves horizontally)
    const scrollSpace2 = SPONSORS_TO_TEAMS_TRACK_REF.current
    const scrollViewBox2 = SPONSORS_TO_TEAMS_RAIL_REF.current

    if (!scrollSpace1 || !scrollViewBox1 || !scrollSpace2 || !scrollViewBox2) return

    const setupHorizontalScroll = () => {
      ScrollTrigger.getAll().forEach((t) => t.kill()) // remove existing scroll triggers

      const screenWidth = window.innerWidth
      const isMobile = screenWidth < 768
      const scrollMultiplier = isMobile ? 2 : 1.25 // faster scroll speed on mobile
      const scrubSpeed = 0.35 // animation progress speed based on scroll

      // Hero → Stats
      gsap.set(scrollViewBox1, {
        width: screenWidth * 2, // total width to cover
        display: 'flex',
        height: '100vh',
        flexWrap: 'nowrap',
      })

      gsap.to(scrollViewBox1, {
        x: -screenWidth, // how far to move right, we start at 1 screen width, we need to move another to complete the total width
        ease: 'none',
        scrollTrigger: {
          trigger: scrollSpace1, // when to start the animation (when the section hits the top of the viewport)
          start: 'top top',
          end: () => `+=${screenWidth * scrollMultiplier}`, // how fast the animation takes in pixels scrolled to cover the end distance of x
          scrub: scrubSpeed,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      // Sponsors → SponsorsCTA → Team
      gsap.set(scrollViewBox2, {
        width: screenWidth * 3,
        display: 'flex',
        height: '100vh',
        flexWrap: 'nowrap',
      })

      gsap.to(scrollViewBox2, {
        x: -screenWidth * 2,
        ease: 'none',
        scrollTrigger: {
          trigger: scrollSpace2,
          start: 'top top',
          end: () => `+=${screenWidth * scrollMultiplier * 2}`,
          scrub: scrubSpeed,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    }

    setupHorizontalScroll()

    // resize handling
    let resizeTimer
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(setupHorizontalScroll, 200)
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      clearTimeout(resizeTimer)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <main style={{ overflow: 'hidden' }}>
      {/* For Fast Visual Testing & Design */}
      {/* <div className="h-screen bg-gray-900">
        <Socials />
      </div> */}

      {/* HORIZONTAL SECTION */}
      <div ref={HERO_TO_STATS_TRACK_REF} className="h-screen overflow-hidden relative">
        <div ref={HERO_TO_STATS_RAIL_REF} className="h-full flex">
          <Hero />
          <Stats />
        </div>
      </div>

      {/* VERTICAL SECTION */}
      <div className="h-[300vh] bg-gray-900">
        <About />
        <Schedule />
        <Faq />
      </div>

      {/* HORIZONTAL SECTION */}
      <div ref={SPONSORS_TO_TEAMS_TRACK_REF} className="h-screen overflow-hidden relative">
        <div ref={SPONSORS_TO_TEAMS_RAIL_REF} className="h-full flex">
          <Sponsors />
          <SponsorsCTA />
          <Team />
        </div>
      </div>

      {/* VERTICAL SECTION */}
      <div className="h-screen bg-gray-900">
        <Socials />
      </div>
    </main>
  )
}
