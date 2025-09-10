'use client'

import Image from "next/image"

const Sponsors = () => {
  return (
    <section id="sponsors" className="w-screen h-screen flex flex-col justify-center items-center relative overflow-hidden pixel-bg-sponsors px-4">
      {/* TITLE */}
      <div className="mb-4 max-[650px]:mb-2 relative z-10">
        <div className="bg-gray-900 text-white px-4 py-2 border-3 border-gray-600 pixel-shadow max-[650px]:px-3 max-[650px]:py-1">
          <h1 className="text-lg font-bold text-center max-[1350px]:text-base max-[650px]:text-xs">Sponsored By</h1>
        </div>
      </div>
      
      <div className="relative flex justify-center items-center flex-col">
        {/* SPONSORS GRID */}
        <div className="relative z-10 w-[550px] max-[650px]:w-[500px] max-[600px]:w-[400px] max-w-xl mb-4 max-[650px]:mb-2">
          <div className="flex pt-2.5 max-[850px]:pt-1.5 border-3 justify-center items-center flex-col border-gray-600 pixel-shadow bg-gradient-to-br from-white to-gray-300 text-black text-center relative">
            <div className="flex justify-center items-center gap-6">
              <a href="https://www.mdc.edu/north/" target="_blank" rel="noopener noreferrer">
                <Image
                  src={"https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757480616/mdc_ijuvcd.png"}
                  height={190}
                  width={190}
                  alt="mdc_north_logo"
                  className="max-[650px]:w-[170px] max-[600px]:w-[140px] transition-transform duration-300 hover:scale-105"
                />
              </a>
              <a href="https://www.mdc.edu/entec/" target="_blank" rel="noopener noreferrer">
                <Image
                  src={"https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757480615/entec_tjnwm3.png"}
                  height={190}
                  width={190}
                  alt="entec_mdc_logo"
                  className="max-[650px]:w-[170px] max-[600px]:w-[140px] transition-transform duration-300 hover:scale-105"
                />
              </a>
            </div>
            <div>
              <a href="https://www.roocapital.com/" target="_blank" rel="noopener noreferrer">
                <Image
                  src={"https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757480616/roo_capital_zqae68.png"}
                  height={230}
                  width={230}
                  alt="roo_capital_logo"
                  className="relative top-[-40px] max-[650px]:w-[190px] max-[650px]:pb-1 max-[600px]:w-[160px] max-[600px]:pb-2 transition-transform duration-300 hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>
        
        {/* SPONSOR CTA */}
        <div className="w-[550px] relative z-10 mx-2 top-[-85px] max-[650px]:w-[500px] max-[600px]:w-[400px]">
          <div className="bg-gray-900 text-white px-2 py-3 border-3 border-gray-600 pixel-shadow max-[650px]:px-3 max-[650px]:py-2">
            <p className="text-center text-sm max-[1350px]:text-[20px]">
              Want to sponsor? Email us at <a href="mailto:mdc-north@weareinit.org" className="text-[#8b5cf6] hover:underline">mdc-north@weareinit.org</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors