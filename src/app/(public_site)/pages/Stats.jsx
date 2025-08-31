'use client'

const Stats = () => {
 return (
   <section id="stats" className="w-screen h-screen flex justify-center items-center relative overflow-hidden pixel-bg-stats">
     {/* CONTENT CONTAINER */}
     <div className="flex justify-around items-center w-full flex-row-reverse">

       {/* LEFT SIDE */}
       <div />

       {/* RIGHT SIDE - STATS */}
       <div className="px-8">
         {/* CONTENT BLOCK */}
         <div className="bg-gray-900 text-white p-6 border-3 border-gray-600 pixel-shadow max-[1350px]:text-sm max-[650px]:text-xs max-[1350px]:p-4 max-[650px]:p-3">
           <div className="flex flex-col gap-4 max-[1350px]:gap-3 max-[650px]:gap-2">
             <h2 className="font-bold max-[1350px]:text-sm max-[650px]:text-xs">36 hours of non-stop coding</h2>
             <h2 className="font-bold max-[1350px]:text-sm max-[650px]:text-xs">Innovative ideas and projects</h2>
             <h2 className="font-bold max-[1350px]:text-sm max-[650px]:text-xs">Expert-led workshops</h2>
           </div>
         </div>
       </div>
       
     </div>
   </section>
 )
}

export default Stats