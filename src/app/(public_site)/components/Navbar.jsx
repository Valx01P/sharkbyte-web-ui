'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="fixed top-0 z-10 w-full bg-white">
      <div className="flex">

        {/* LOGO */}
        <div className="flex justify-center items-center w-min">
          {/* DIVIDER */}
          <div className='max-[1026px]:hidden px-4 max-[1350px]:text-sm max-[1350px]:px-2'> | </div>
          <h1 className="transition-transform duration-300 hover:animate-[wiggle_2s_ease-in-out_infinite] cursor-pointer max-[1026px]:pl-4 max-[1350px]:text-sm">
            SharkByte
          </h1>
          {/* DIVIDER */}
          <div className='max-[1026px]:hidden px-4 max-[1350px]:text-sm max-[1350px]:px-2'> | </div>
        </div>

        {/* _____ DESKTOP _____ */}
        <div className='max-[1026px]:hidden flex items-center w-full px-4 max-[1350px]:px-2'>
          {/* Nav Links */}
          <ul className="flex justify-center items-center gap-6 w-full max-[1350px]:gap-4">
            <a href="/" className="flex justify-center items-center relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full max-[1350px]:text-sm">Home</a>
            <a href="/about" className="flex justify-center items-center relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full max-[1350px]:text-sm">About</a>
            <a href="/schedule" className="flex justify-center items-center relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full max-[1350px]:text-sm">Schedule</a>
            <a href="/faq" className="flex justify-center items-center relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full max-[1350px]:text-sm">FAQ</a>
            <a href="/sponsors" className="flex justify-center items-center relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full max-[1350px]:text-sm">Sponsors</a>
          </ul>
        </div>

        {/* _____ DESKTOP _____ */}
        <div className='max-[1026px]:hidden flex-auto'>
          <div className="flex items-center justify-end w-full">
            {/* DIVIDER */}
            <div className='px-4 max-[1350px]:text-sm max-[1350px]:px-2'> | </div>
            {/* Register */}
            <div className='transition-transform duration-300 hover:scale-105'>
              <Link href="/register" className="bg-white px-3 border-3 pixel-shadow max-[1350px]:text-sm max-[1350px]:px-2">
                Register
              </Link>
            </div>
            {/* DIVIDER */}
            <div className='px-4 max-[1350px]:text-sm max-[1350px]:px-2'> | </div>
            {/* Socials */}
            <div className='flex gap-2 pr-4 max-[1350px]:text-sm max-[1350px]:pr-2'>
              <svg className='transition-transform duration-300 hover:scale-110' stroke="currentColor" fill="currentColor" viewBox="0 0 640 512" focusable="false" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path></svg>
              <svg className='transition-transform duration-300 hover:scale-110' stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" focusable="false" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
              <svg className='transition-transform duration-300 hover:scale-110' stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" focusable="false" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
            </div>
          </div>
        </div>

        {/* _____ MOBILE _____ */}
        <div className="min-[1026px]:hidden flex w-full">
          <div className="flex justify-end items-center w-full pr-4">
            <Image
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
              src="/svgs/menu.svg"
              alt="menu"
              width={26}
              height={26}
              onClick={() => toggleMobileMenu()}
            />
          </div>
          
          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <>
              {/* Background blur overlay */}
              <div 
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              ></div>
              
              {/* Sidebar menu */}
              <div className={`fixed top-0 right-0 h-dvh w-full max-w-[350px] bg-white z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Close button */}
                <div className="flex justify-end p-4">
                  <Image 
                    className="cursor-pointer transition-transform duration-300 hover:scale-110" 
                    src="/svgs/x.svg" 
                    alt="close" 
                    width={26} 
                    height={26}
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                </div>
                
                {/* Menu content */}
                <div className="flex flex-col items-end pr-8 space-y-6">
                  {/* Nav Links */}
                  <div className="flex flex-col items-end space-y-4">
                    <a href="/" className="text-right relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Home</a>
                    <a href="/about" className="text-right relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">About</a>
                    <a href="/schedule" className="text-right relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Schedule</a>
                    <a href="/faq" className="text-right relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">FAQ</a>
                    <a href="/sponsors" className="text-right relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Sponsors</a>
                  </div>
                  
                  {/* Register button */}
                  <div className="pt-4 transition-transform duration-300 hover:scale-105">
                    <Link href="/register" className="bg-white px-4 py-2 border-3 pixel-shadow">
                      Register
                    </Link>
                  </div>
                  
                  {/* Social icons */}
                  <div className="flex gap-3 pt-4">
                    <svg className="transition-transform duration-300 hover:scale-110" stroke="currentColor" fill="currentColor" viewBox="0 0 640 512" focusable="false" aria-hidden="true" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path></svg>
                    <svg className="transition-transform duration-300 hover:scale-110" stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" focusable="false" aria-hidden="true" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                    <svg className="transition-transform duration-300 hover:scale-110" stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" focusable="false" aria-hidden="true" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

      </div>
    </nav>
  )
}

export default Navbar
