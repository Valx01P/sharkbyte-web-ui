'use client'

const Sponsors = () => {
 const sponsors = [
   "TechCorp", "CodeBase", "DevTools Inc", "StartupHub", 
   "InnovateLab", "CloudTech", "DataFlow", "WebSoft"
 ]

 return (
   <section id="sponsors" className="w-screen h-screen flex flex-col justify-center items-center relative overflow-hidden pixel-bg-sponsors px-4">
     {/* TITLE */}
     <div className="mb-4 max-[650px]:mb-2 relative z-10">
       <div className="bg-gray-900 text-white px-4 py-2 border-3 border-gray-600 pixel-shadow max-[650px]:px-3 max-[650px]:py-1">
         <h1 className="text-lg font-bold text-center max-[1350px]:text-base max-[650px]:text-xs">Sponsored By</h1>
       </div>
     </div>

     {/* SPONSORS GRID */}
     <div className="relative z-10 w-full max-w-xl mb-4 max-[650px]:mb-2">
       <div className="p-2 border-3 border-gray-600 pixel-shadow bg-gray-900 text-white py-4 grid grid-cols-4 gap-4 text-center max-[1026px]:grid-cols-3 max-[1350px]:gap-3 max-[650px]:grid-cols-2 max-[650px]:gap-2">
         {sponsors.map((sponsor, index) => (
           <div 
             key={index} 
             className="text-lg font-medium text-white hover:text-[#8b5cf6] transition-colors duration-300 cursor-pointer max-[1350px]:text-base max-[650px]:text-xs"
           >
             {sponsor}
           </div>
         ))}
       </div>
     </div>

     {/* SPONSOR CTA */}
     <div className="relative z-10 mx-2">
       <div className="bg-gray-900 text-white px-4 py-3 border-3 border-gray-600 pixel-shadow max-[650px]:px-3 max-[650px]:py-2">
         <p className="text-center text-sm max-[1350px]:text-xs max-[650px]:text-[20px]">
           Want to sponsor? Email us at <span className="font-bold">sponsors@sharkbyte.dev</span>
         </p>
       </div>
     </div>
   </section>
 )
}

export default Sponsors