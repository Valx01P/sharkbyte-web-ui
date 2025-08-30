'use client'

const Partners = () => {
  const partners = [
    "Miami Dade College", "IEEE", "ACM", "Google Developer Groups",
    "Microsoft Student Partners", "GitHub Campus", "Figma Community"
  ]

  return (
    <section id="partners" className="w-screen h-screen flex flex-col justify-center items-center relative overflow-hidden pixel-bg-sponsors-cta px-4">
      {/* COMMUNITY PARTNERS TITLE */}
      <div className="mb-4 max-[650px]:mb-3 relative z-10">
        <div className="bg-gray-900 text-white px-4 py-2 border-3 border-gray-600 pixel-shadow max-[650px]:px-3 max-[650px]:py-1">
          <h1 className="text-lg font-bold text-center max-[1350px]:text-base max-[650px]:text-xs">Community Partners</h1>
        </div>
      </div>

      {/* PARTNERS GRID */}
      <div className="p-2 relative z-10 w-full max-w-xl bg-gray-900 text-white border-3 border-gray-600 pixel-shadow">
        <div className="grid grid-cols-3 gap-4 text-center max-[1350px]:gap-3 max-[650px]:grid-cols-2 max-[650px]:gap-2">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="text-sm font-medium flex justify-center items-center text-white hover:text-[#8b5cf6] transition-colors duration-300 cursor-pointer max-[650px]:text-xs"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners