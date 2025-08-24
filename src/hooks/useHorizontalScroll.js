import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Wire up a pinned horizontal scroll for a set of panels.
 *
 * @param {Object} params
 * @param {React.RefObject} params.trackRef  outer <div> that gets pinned
 * @param {React.RefObject} params.railRef   inner flex row we translate on X
 * @param {number} params.panels             how many full-viewport panels live inside railRef
 * @param {number} [params.scrubSpeed=0.35]  ScrollTrigger scrub value
 */
export function useHorizontalScroll({ trackRef, railRef, panels, scrubSpeed = 0.35 }) {
  useLayoutEffect(() => {
    const track = trackRef.current
    const rail = railRef.current
    if (!track || !rail) return

    let tween // holds the current gsap tween

    const update = () => {
      // kill only this tween & its trigger
      tween?.scrollTrigger?.kill()
      tween?.kill()

      const screenWidth = window.innerWidth
      const isMobile = screenWidth < 768
      const scrollFactor = isMobile ? 2 : 1.25 // faster scroll speed on mobile

      gsap.set(rail, {
        width: screenWidth * panels, // total width to cover
        display: 'flex',
        height: '100vh',
        flexWrap: 'nowrap',
      })

      tween = gsap.to(rail, {
        x: -screenWidth * (panels - 1), // how far to move right, we start at 1 screen width, we need to move another to complete the total width
        ease: 'none',
        scrollTrigger: {
          trigger: track, // when to start the animation (when the section hits the top of the viewport)
          start: 'top top',
          end: `+=${screenWidth * scrollFactor * (panels - 1)}`, // how fast the animation takes in pixels scrolled to cover the end distance of x
          scrub: scrubSpeed,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    }

    // first run, every GSAP refresh (includes debounced resize)
    update()
    ScrollTrigger.addEventListener('refreshInit', update)

    return () => {
      ScrollTrigger.removeEventListener('refreshInit', update)
      tween?.scrollTrigger?.kill()
      tween?.kill()
    }
  }, [trackRef, railRef, panels, scrubSpeed])
}
