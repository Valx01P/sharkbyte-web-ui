'use client'

const Team = () => {
 const teamMembers = [
   {
     name: "Yandel",
     role: "Director",
     image: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757480603/yandel_f4mugj.png",
     linkedin: "https://www.linkedin.com/in/yp06/"
   },
   {
     name: "Raul",
     role: "Co-Director",
     image: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757480602/raul_qycqmw.png",
     linkedin: "https://www.linkedin.com/in/raul02/"
   },
   {
     name: "Abigail",
     role: "Marketing",
     image: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757480601/abigail_otyeho.png",
     linkedin: "https://www.linkedin.com/in/abigail-lozano317/"
   },
   {
     name: "Daniel",
     role: "Outreach",
     image: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757480600/daniel_jon56g.png",
     linkedin: "https://www.linkedin.com/in/daniel-rodriguez-3ab841372"
   },
   {
     name: "Jorge",
     role: "Outreach",
     image: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757480602/jorge_oesssr.png",
     linkedin: "https://www.linkedin.com/in/jorge-rodriguez-27a4a6231/"
   },
   {
     name: "Julianna",
     role: "Marketing",
     image: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757480604/julianna_vfgkdg.png",
     linkedin: "https://www.linkedin.com/in/julianna-chii/"
   },
   {
     name: "Pablo",
     role: "Web Design",
     image: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757480601/pablo_sn7fxl.png",
     linkedin: "https://www.linkedin.com/in/pablovaldes01/"
   },
   {
     name: "Santiago",
     role: "Sponsors",
     image: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757480602/santiago_caq1e6.png",
     linkedin: "https://www.linkedin.com/in/santiago-padron-62922526b/"
   }
 ]

 return (
   <section id="team" className="w-screen h-screen flex flex-col justify-center items-center relative overflow-hidden pixel-bg-team">
     {/* TITLE */}
     <div className="mb-3 max-[650px]:mb-2 relative z-10">
       <div className="bg-gray-900 text-white px-4 py-2 border-3 border-gray-600 pixel-shadow max-[650px]:px-3 max-[650px]:py-1">
         <h1 className="text-lg font-bold text-center max-[1350px]:text-base max-[650px]:text-xs">Our Team</h1>
       </div>
     </div>

     {/* DESKTOP TEAM GRID */}
     <div className="max-[650px]:hidden">
       {/* Top row - 2 members */}
       <div className="relative z-10 grid grid-cols-2 gap-3">
         {teamMembers.slice(0, 2).map((member, index) => (
           <a 
             key={index} 
             href={member.linkedin} 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex justify-center items-center gap-0 flex-col bg-gray-900 text-white px-2 py-1 border-2 border-gray-600 pixel-shadow text-center transition-transform duration-300 hover:animate-[wiggle_2s_ease-in-out_infinite] hover:scale-105 cursor-pointer"
           >
             <div className="h-[150px]">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-11 h-11 rounded-full mx-auto mb-0.5 mt-0.5 border border-gray-600"
              />
              <h3 className="font-bold text-[20px]">{member.name}</h3>
              <p className="text-gray-300 relative top-[-10px] text-[20px]">{member.role}</p>
             </div>
           </a>
         ))}
       </div>

       {/* Middle row - 3 members */}
       <div className="relative z-10 grid grid-cols-3 gap-3 mt-3">
         {teamMembers.slice(2, 5).map((member, index) => (
           <a 
             key={index} 
             href={member.linkedin} 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex justify-center items-center gap-0 flex-col bg-gray-900 text-white px-2 py-1 border-2 border-gray-600 pixel-shadow text-center transition-transform duration-300 hover:animate-[wiggle_2s_ease-in-out_infinite] hover:scale-105 cursor-pointer"
           >
             <div className="h-[150px]">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-11 h-11 rounded-full mx-auto mb-0.5 mt-0.5 border border-gray-600"
              />
              <h3 className="font-bold text-[20px]">{member.name}</h3>
              <p className="text-gray-300 relative top-[-10px] text-[20px]">{member.role}</p>
             </div>
           </a>
         ))}
       </div>

       {/* Bottom row - 3 members */}
       <div className="relative z-10 grid grid-cols-3 gap-3 mt-3">
         {teamMembers.slice(5, 8).map((member, index) => (
           <a 
             key={index} 
             href={member.linkedin} 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex justify-center items-center gap-0 flex-col bg-gray-900 text-white px-2 py-1 border-2 border-gray-600 pixel-shadow text-center transition-transform duration-300 hover:animate-[wiggle_2s_ease-in-out_infinite] hover:scale-105 cursor-pointer"
           >
             <div className="h-[150px]">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-11 h-11 rounded-full mx-auto mb-0.5 mt-0.5 border border-gray-600"
              />
              <h3 className="font-bold text-[20px]">{member.name}</h3>
              <p className="text-gray-300 relative top-[-10px] text-[20px]">{member.role}</p>
             </div>
           </a>
         ))}
       </div>
     </div>

     {/* MOBILE TWO-ROW CAROUSEL */}
     <div className="min-[651px]:hidden relative z-10 w-full overflow-x-auto">
       <div className="flex flex-col gap-2">
         {/* Top row */}
         <div className="flex gap-2 px-4" style={{ width: 'max-content' }}>
           {teamMembers.slice(0, 4).map((member, index) => (
             <a 
               key={index} 
               href={member.linkedin} 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex justify-center items-center gap-0 flex-col bg-gray-900 text-white px-2 py-1 border-2 border-gray-600 pixel-shadow text-center transition-transform duration-300 hover:animate-[wiggle_2s_ease-in-out_infinite] hover:scale-105 cursor-pointer flex-shrink-0"
             >
               <div className="h-[150px]">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-11 h-11 rounded-full mx-auto mb-0.5 mt-0.5 border border-gray-600"
                />
                <h3 className="font-bold text-[20px]">{member.name}</h3>
                <p className="text-gray-300 relative top-[-10px] text-[20px]">{member.role}</p>
               </div>
             </a>
           ))}
         </div>
         {/* Bottom row */}
         <div className="flex gap-2 px-4 pb-2" style={{ width: 'max-content' }}>
           {teamMembers.slice(4, 8).map((member, index) => (
             <a 
               key={index + 4} 
               href={member.linkedin} 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex justify-center items-center gap-0 flex-col bg-gray-900 text-white px-2 py-1 border-2 border-gray-600 pixel-shadow text-center transition-transform duration-300 hover:animate-[wiggle_2s_ease-in-out_infinite] hover:scale-105 cursor-pointer flex-shrink-0"
             >
               <div className="h-[150px]">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-11 h-11 rounded-full mx-auto mb-0.5 mt-0.5 border border-gray-600"
                />
                <h3 className="font-bold text-[20px]">{member.name}</h3>
                <p className="text-gray-300 relative top-[-10px] text-[20px]">{member.role}</p>
               </div>
             </a>
           ))}
         </div>
       </div>
     </div>
     {/* MOBILE SCROLL INDICATOR */}
     <div className="min-[651px]:hidden mt-8 text-white font-bold text-sm text-center max-[650px]:text-xs max-[500px]:text-[20px] max-[500px]:mt-4">
       ← Scroll horizontally to view team →
     </div>
   </section>
 )
}

export default Team