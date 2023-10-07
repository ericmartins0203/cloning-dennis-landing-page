'use client';
import Projects from '@/components/Projects';
import { useEffect } from 'react'

export default function Home() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <main>
      {/* <AnimatePresence mode='wait'>
        <Projects />
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <SlidingImages />
      <Contact /> */}
    </main>
  )
}
