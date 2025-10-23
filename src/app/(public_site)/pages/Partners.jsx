'use client'
import { useState } from 'react'

const Partners = () => {
  const [activeTab, setActiveTab] = useState('partners')

  const partners = [
    ["Miami Dade College", "https://www.mdc.edu/"],
    ["inTech", "https://intech.broward.edu/"],
    ["INIT Pro", "https://www.linkedin.com/company/init-pro"],
    ["Knight Foundation", "https://knightfoundation.org/community/miami/"],
    ["Lab22c", "https://lab22c.com/"],
    ["MLH", "https://mlh.io/"],
    ["City of Miami", "https://www.miami.gov/Home"],
    ["Miami Tech Works", "https://miamitechworks.org/"],
    ["Momentum Miami", "https://www.momentum.miami/"],
    ["Entec MDC", "https://www.mdc.edu/entec/"],
    ["Init National", ""]
  ]

  const facultyAdvisors = [
    "Professor Carmen Bucher",
    "Dr. Nelly Delessy",
    "Dr. George Gabb"
  ]

  return (
    <section id="partners" className="w-screen h-screen flex flex-col justify-center items-center relative overflow-hidden pixel-bg-sponsors-cta px-4">
      {/* TAB SWITCHER */}
      <div className="mb-4 max-[650px]:mb-3 relative z-10 flex gap-2">
        <button
          onClick={() => setActiveTab('partners')}
          className={`hover:cursor-pointer px-4 py-2 border-3 pixel-shadow transition-transform duration-300 hover:scale-110 max-[650px]:px-3 max-[650px]:py-1 ${
            activeTab === 'partners'
              ? 'bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white border-gray-600'
              : 'bg-white text-gray-900 border-gray-600'
          }`}
        >
          <div className="text-sm font-bold max-[650px]:text-xs max-[500px]:text-[22px]">Community Partners</div>
        </button>
        <button
          onClick={() => setActiveTab('faculty')}
          className={`hover:cursor-pointer px-4 py-2 border-3 pixel-shadow transition-transform duration-300 hover:scale-110 max-[650px]:px-3 max-[650px]:py-1 ${
            activeTab === 'faculty'
              ? 'bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white border-gray-600'
              : 'bg-white text-gray-900 border-gray-600'
          }`}
        >
          <div className="text-sm font-bold max-[650px]:text-xs max-[500px]:text-[22px]">Faculty Advisors</div>
        </button>
      </div>

      {/* CONTENT CONTAINER */}
      <div className="max-w-[600px] p-4 relative z-10 w-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white border-3 border-gray-600 pixel-shadow max-[500px]:p-2">
        {activeTab === 'partners' ? (
          <div className="grid grid-cols-4 gap-4 text-center max-[1350px]:gap-3 max-[650px]:grid-cols-3 max-[650px]:gap-2">
            {partners.map((partner, index) => (
              partner[1] ? (
                <a 
                  href={partner[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index} 
                  className="text-sm font-medium flex justify-center items-center text-white hover:text-[#8b5cf6] transition-colors duration-300 cursor-pointer max-[650px]:text-xs max-[500px]:text-[19px] max-[500px]:py-0.5"
                >
                  {partner[0]}
                </a>
              ) : (
                <div 
                  key={index} 
                  className="text-sm font-medium flex justify-center items-center text-white max-[650px]:text-xs max-[500px]:text-[19px] max-[500px]:py-0.5"
                >
                  {partner[0]}
                </div>
              )
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 gap-4 max-[1350px]:gap-3 max-[650px]:gap-2">
              {facultyAdvisors.map((faculty, index) => (
                <div 
                  key={index} 
                  className="text-sm font-medium flex flex-col justify-center items-center text-center text-white max-[650px]:text-xs max-[500px]:text-[19px] max-[500px]:py-0.5"
                >
                  {faculty}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Partners