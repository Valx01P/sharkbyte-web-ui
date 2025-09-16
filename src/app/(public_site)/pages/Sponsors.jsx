'use client'

import Image from "next/image"

const Sponsors = () => {
  return (
    <section id="sponsors" className="w-screen h-screen flex flex-col justify-center items-center relative overflow-hidden pixel-bg-sponsors px-4">
      {/* TITLE */}
      <div className="mb-4 max-[650px]:mb-2 relative z-10 mt-14">
        <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-4 py-2 border-3 border-gray-600 pixel-shadow max-[650px]:px-3 max-[650px]:py-1">
          <h1 className="text-lg font-bold text-center max-[1350px]:text-base max-[650px]:text-xs max-[500px]:text-[22px]">Sponsored By</h1>
        </div>
      </div>
      
      <div className="w-full max-w-lg relative flex justify-center items-center flex-col mb-8">
        {/* SPONSORS GRID */}
        <div className="flex flex-wrap justify-center items-center gap-2 relative py-4 z-10 mb-4 max-[650px]:mb-2 max-w-full">
          <a href="https://www.mdc.edu/north/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center transition-transform duration-300 hover:scale-110 border-3 border-gray-600 pixel-shadow bg-gradient-to-br from-white to-gray-300 py-2 min-h-[230px] min-w-[230px] max-[1050px]:min-w-[200px] max-[1050px]:min-h-[200px] max-[700px]:min-w-[140px] max-[700px]:min-h-[140px] flex-shrink-0">
            <Image
              src={"https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757480616/mdc_ijuvcd.png"}
              height={140}
              width={140}
              alt="mdc_north_logo"
              className="max-[1050px]:w-[120px] max-[700px]:w-[100px]"
            />
          </a>
          <a href="https://www.mdc.edu/entec/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center transition-transform duration-300 hover:scale-110 border-3 border-gray-600 pixel-shadow bg-gradient-to-br from-white to-gray-300 py-2 min-h-[230px] min-w-[230px] max-[1050px]:min-w-[200px] max-[1050px]:min-h-[200px] max-[700px]:min-w-[140px] max-[700px]:min-h-[140px] max-[700px]:py-0 flex-shrink-0">
            <Image
              src={"https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757480615/entec_tjnwm3.png"}
              height={140}
              width={140}
              alt="entec_mdc_logo"
              className="max-[1050px]:w-[120px] max-[700px]:w-[100px]"
            />
          </a>
          <a href="https://www.roocapital.com/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center transition-transform duration-300 hover:scale-110 border-3 border-gray-600 pixel-shadow bg-gradient-to-br from-white to-gray-300 py-2 min-h-[230px] min-w-[230px] max-[1050px]:min-w-[200px] max-[1050px]:min-h-[200px] max-[700px]:min-w-[135px] max-[700px]:min-h-[135px] max-[700px]:py-0 flex-shrink-0">
            <Image
              src={"https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757480616/roo_capital_zqae68.png"}
              height={190}
              width={190}
              alt="roo_capital_logo"
              className="max-[1050px]:w-[160px] max-[1050px]:h-[140px] max-[700px]:w-[120px] max-[700px]:h-[120px] max-[700px]:hover:scale-100"
            />
          </a>
          <a href="https://www.redbull.com/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center transition-transform duration-300 hover:scale-110 border-3 border-gray-600 pixel-shadow bg-gradient-to-br from-white to-gray-300 py-2 min-h-[230px] min-w-[230px] max-[1050px]:min-w-[200px] max-[1050px]:min-h-[200px] max-[700px]:min-w-[140px] max-[700px]:min-h-[135px] max-[700px]:py-0 flex-shrink-0">
            <Image
              src={"https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757706321/redbull_ouhiwo.svg"}
              height={190}
              width={190}
              alt="redbull_logo"
              className="max-[1050px]:w-[160px] max-[1050px]:h-[140px] max-[700px]:w-[120px] max-[700px]:h-[120px] max-[700px]:hover:scale-100"
            />
          </a>
        </div>
        
        {/* SPONSOR CTA */}
        <div className="w-[550px] relative z-10 mx-2 max-[650px]:w-[500px] max-[600px]:w-[400px] max-[500px]:w-[360px] max-[390px]:w-[300px]">
          <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-2 py-3 border-3 border-gray-600 pixel-shadow max-[650px]:px-3 max-[650px]:py-2">
            <p className="text-center text-sm max-[1350px]:text-[24px] max-[500px]:text-[19px]">
              Want to sponsor? Email us at{" "}
              <a
                href="mailto:mdc-north@weareinit.org"
                className="text-[#8b5cf6] hover:underline whitespace-nowrap"
              >
                mdc-north@weareinit.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors