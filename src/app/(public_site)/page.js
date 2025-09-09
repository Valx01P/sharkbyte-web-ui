'use client'

import { useRef } from 'react'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'

import Hero from './pages/Hero'
import Stats from './pages/Stats'
import About from './pages/About'
import Schedule from './pages/Schedule'
import Faq from './pages/Faq'
import Sponsors from './pages/Sponsors'
import Partners from './pages/Partners'
import Team from './pages/Team'
import Socials from './pages/Socials'

export default function Home() {
  const heroStatsTrackRef = useRef(null)
  const heroStatsRailRef = useRef(null)
  const sponsorsTrackRef = useRef(null)
  const sponsorsRailRef = useRef(null)

  useHorizontalScroll({ trackRef: heroStatsTrackRef, panels: 2, railRef: heroStatsRailRef })
  useHorizontalScroll({ trackRef: sponsorsTrackRef, panels: 3, railRef: sponsorsRailRef })

  return (
    <main className="overflow-hidden">
      {/* For Fast Visual Testing & Design */}
      {/* <div className="h-screen bg-gray-900">
        <Socials />
      </div> */}

      {/* HORIZONTAL */}
      <div ref={heroStatsTrackRef} className="h-screen overflow-hidden relative">
        <div ref={heroStatsRailRef} className="h-full flex">
          <Hero />
          <Stats />
        </div>
      </div>

      {/* VERTICAL */}
      <div className="min-h-[300vh] bg-gray-900">
        <About />
        <Schedule />
        <Faq />
      </div>

      {/* HORIZONTAL */}
      <div ref={sponsorsTrackRef} className="h-screen overflow-hidden relative">
        <div ref={sponsorsRailRef} className="h-full w-auto flex">
          <Sponsors />
          <Partners />
          <Team />
        </div>
      </div>

      {/* VERTICAL */}
      <div className="min-h-screen bg-gray-900">
        <Socials />
      </div>
    </main>
  )
}
