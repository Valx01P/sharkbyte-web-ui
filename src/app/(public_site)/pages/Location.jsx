'use client'

import { useState } from 'react'

const Location = () => {
  const [activeMap, setActiveMap] = useState(1)
  const [isExpanded, setIsExpanded] = useState(false)
  /*
    0: MDC Map 
    1: Google Map
    2: Campus Layout
  */

  const mapOptions = [
    { 
      name: "MDC Map", 
      value: 0, 
      url: 'https://clients.mapsindoors.com/miamidadecollege/cd5ee2abc27c4ea8876a331a/search'
    },
    { 
      name: "Google Map", 
      value: 1, 
      url: "https://maps.google.com/maps?q=John+F.+Kennedy+Center,+Kennedy+Dr,+Miami,+FL+33167"
    },
    { 
      name: "Campus Layout", 
      value: 2, 
      url: "https://www.mdc.edu/north/campus-information/directions.aspx"
    }
  ]

  const openInNewTab = () => {
    const currentMap = mapOptions.find(map => map.value === activeMap)
    if (currentMap) {
      window.open(currentMap.url, '_blank')
    }
  }

  const renderMapContent = () => {
    const commonIframeProps = {
      style: { 
        border: 0,
        transform: 'scale(0.8)', // Zoom out effect
        transformOrigin: 'top left',
        width: '125%', // Compensate for scale
        height: '125%'
      },
      allowFullScreen: true,
      loading: "lazy",
      referrerPolicy: "no-referrer-when-downgrade"
    }

    const containerHeight = isExpanded ? 'h-[70vh]' : 'h-[420px]'

    switch (activeMap) {
      case 0:
        // MDC Interactive Map
        return (
          <div className="relative w-full max-w-lg">
            {/* Map container wrapper */}
            <div className="relative overflow-hidden">
              {/* Inner container with black background for loading state */}
              <div className={`relative ${containerHeight} transition-all duration-300 ease-in-out bg-black`}>
                <iframe
                  src='https://clients.mapsindoors.com/miamidadecollege/cd5ee2abc27c4ea8876a331a/search'
                  className="w-full h-full relative z-[1]"
                  {...commonIframeProps}
                />
                
                {/* Overlay Controls */}
                <div className="absolute top-0 right-0 flex gap-0 z-5">
                  <button
                    onClick={openInNewTab}
                    className="w-5 h-5 cursor-pointer bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                    title="Open in new tab"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15,3 21,3 21,9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => {
                      const iframe = document.querySelector('iframe')
                      if (iframe && iframe.requestFullscreen) {
                        iframe.requestFullscreen()
                      }
                    }}
                    className="w-5 h-5 cursor-pointer bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                    title="Fullscreen"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Expand/Collapse Button - Outside the container with black background */}
            <div className="flex justify-start relative z-5">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="cursor-pointer bg-black/80 hover:bg-black/90 text-white px-4 py-0.5 rounded-b-lg transition-all duration-200 shadow-lg"
                title={isExpanded ? "Collapse map" : "Expand map"}
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
            </div>
          </div>
        )

      case 1:
        // Google Map
        return (
          <div className="relative w-full max-w-lg">
            {/* Map container wrapper */}
            <div className="relative overflow-hidden">
              {/* Inner container with black background for loading state */}
              <div className={`relative ${containerHeight} transition-all duration-300 ease-in-out bg-black`}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.033039379458!2d-80.24827804517018!3d25.879864182976842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0391b7d8ae9%3A0x412412fc3d70a127!2sJohn%20F.%20Kennedy%20Center%2C%20Kennedy%20Dr%2C%20Miami%2C%20FL%2033167!5e0!3m2!1sen!2sus!4v1757597869517!5m2!1sen!2sus"
                  className="w-full h-full relative z-[1]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                
                {/* Overlay Controls */}
                <div className="absolute top-0 right-0 flex gap-0 z-5">
                  <button
                    onClick={openInNewTab}
                    className="w-5 h-5 cursor-pointer bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                    title="Open in new tab"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15,3 21,3 21,9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => {
                      const iframe = document.querySelector('iframe')
                      if (iframe && iframe.requestFullscreen) {
                        iframe.requestFullscreen()
                      }
                    }}
                    className="w-5 h-5 cursor-pointer bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                    title="Fullscreen"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Expand/Collapse Button - Outside the container with black background */}
            <div className="flex justify-start relative z-5">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="cursor-pointer bg-black/80 hover:bg-black/90 text-white px-4 py-0.5 rounded-b-lg transition-all duration-200 shadow-lg"
                title={isExpanded ? "Collapse map" : "Expand map"}
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
            </div>
          </div>
        )

      case 2:
        // Campus Layout/Directions
        return (
          <div className="relative w-full max-w-lg">
            {/* Map container wrapper */}
            <div className="relative overflow-hidden">
              {/* Inner container with black background for loading state */}
              <div className={`relative ${containerHeight} transition-all duration-300 ease-in-out bg-black`}>
                <iframe
                  src="https://www.mdc.edu/north/campus-information/directions.aspx"
                  className="w-full h-full relative z-[1]"
                  {...commonIframeProps}
                />
                
                {/* Overlay Controls */}
                <div className="absolute top-0 right-0 flex gap-0 z-5">
                  <button
                    onClick={openInNewTab}
                    className="w-5 h-5 cursor-pointer bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                    title="Open in new tab"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15,3 21,3 21,9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => {
                      const iframe = document.querySelector('iframe')
                      if (iframe && iframe.requestFullscreen) {
                        iframe.requestFullscreen()
                      }
                    }}
                    className="w-5 h-5 cursor-pointer bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                    title="Fullscreen"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Expand/Collapse Button - Outside the container with black background */}
            <div className="flex justify-start relative z-5">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="cursor-pointer bg-black/80 hover:bg-black/90 text-white px-4 py-0.5 rounded-b-lg transition-all duration-200 shadow-lg"
                title={isExpanded ? "Collapse map" : "Expand map"}
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section
      id="location"
      className="w-screen min-h-screen flex flex-col justify-start items-center relative overflow-hidden pixel-bg-location py-4 max-[1350px]:py-4 max-[650px]:py-4"
    >
      {/* TITLE */}
      <div className="mx-4 mb-4 max-[650px]:mb-4 mt-4 max-[650px]:mt-2">
        <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-6 py-3 border-3 border-gray-600 pixel-shadow max-[650px]:px-4 max-[650px]:py-2">
          <h1 className="text-lg font-bold text-center max-[1350px]:text-base max-[650px]:text-xs max-[500px]:text-[22px]">
            Location
          </h1>
        </div>
      </div>

      {/* LOCATION INFO */}
      <div className="mx-4 max-[650px]:mx-1 mb-4 text-center py-3 px-5 max-[650px]:px-4 max-[500px]:px-3 max-[300px]:px-2 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 border-3 border-gray-600 pixel-shadow">
        <div className="text-white text-sm max-[650px]:text-xs max-[500px]:text-[22px] max-[300px]:text-[20px]">
          School of Justice Building
        </div>
        <div className="text-white text-sm max-[650px]:text-xs max-[500px]:text-[22px] max-[300px]:text-[20px]">
          Miami Dade College, North Campus
        </div>
        <div className="text-white text-sm max-[650px]:text-xs max-[500px]:text-[22px] max-[300px]:text-[20px]">
          Florida, United States
        </div>
      </div>

      {/* TAB NAVIGATION */}
      <div className="px-4 max-[650px]:px-0 flex flex-wrap justify-center gap-2 max-[650px]:gap-1 mb-4">
        {mapOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => setActiveMap(option.value)}
            className={`hover:cursor-pointer px-4 py-2 border-3 pixel-shadow transition-transform duration-300 hover:scale-110 max-[650px]:px-2 max-[650px]:py-1 ${
              activeMap === option.value
                ? 'bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white border-gray-600'
                : 'bg-white text-gray-900 border-gray-600'
            }`}
          >
            <div className="text-sm font-bold max-[650px]:text-xs max-[390px]:text-[19px]">{option.name}</div>
          </button>
        ))}
      </div>

      {/* LOCATION CONTENT */}
      <div className="flex justify-center w-full px-4">
        {renderMapContent()}
      </div>
    </section>
  )
}

export default Location