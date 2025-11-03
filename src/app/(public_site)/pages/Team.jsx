'use client'

const Team = () => {
 const teamMembers = [
   {
     name: "Abigail",
     role: "Marketing",
     image: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757480601/abigail_otyeho.png",
     linkedin: "https://www.linkedin.com/in/abigail-lozano317/"
   },
   {
    name: "Alfredo",
    role: "Sponsors",
    image: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757515390/alfredo_nvmow9.jpg",
    linkedin: "https://www.linkedin.com/in/alfredobenites/"
   },
   {
     name: "Elias",
     role: "Sponsors",
     image: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1760724906/elias_zas5kg.jpg",
     linkedin: "https://www.linkedin.com/in/elias-estrada-1445ab2b5"
   },
   {
     name: "Daniel",
     role: "Sponsors",
     image: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757480600/daniel_jon56g.png",
     linkedin: "https://www.linkedin.com/in/daniel-rodriguez-3ab841372"
   },
   {
     name: "Jorge",
     role: "Co-Director",
     image: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1762206189/jorge_b935uw.png",
     linkedin: "https://www.linkedin.com/in/jorge-rodriguez-27a4a6231/"
   },
   {
     name: "Yandel",
     role: "Director",
     image: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757510442/yandel_sqbluu.jpg",
     linkedin: "https://www.linkedin.com/in/yp06/"
   },
   {
     name: "Raul",
     role: "Co-Director",
     image: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757480602/raul_qycqmw.png",
     linkedin: "https://www.linkedin.com/in/raul02/"
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
     image: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757510442/pablo_rzznjw.jpg",
     linkedin: "https://www.linkedin.com/in/pablovaldes01/"
   },
   {
     name: "Santiago",
     role: "Sponsors",
     image: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757480602/santiago_caq1e6.png",
     linkedin: "https://www.linkedin.com/in/santiago-padron-62922526b/"
   },
   {
     name: "Jimmy",
     role: "Volunteers",
     image: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1762205747/jean_pfabjl.jpg",
     linkedin: "https://www.linkedin.com/in/jimmy-j-01679436a/?trk=contact-info"
   },
   {
     name: "Christian",
     role: "Workshops",
     image: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1762204613/christian_ouwf4a.jpg",
     linkedin: "https://www.linkedin.com/in/christian-aguilera-4b480b306/"
   },
   {
     name: "Erick",
     role: "Activities",
     image: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1762202210/erick_wlowur.jpg",
     linkedin: "https://www.linkedin.com/in/erick-gonzalez-888b7a377/"
   }
 ]

 // Split team members into two halves
 const firstHalf = teamMembers.slice(0, Math.ceil(teamMembers.length / 2)); // First 7 members
 const secondHalf = teamMembers.slice(Math.ceil(teamMembers.length / 2)); // Last 6 members

 const TeamCard = ({ member }) => {
   return (
     <a 
       href={member.linkedin} 
       target="_blank" 
       rel="noopener noreferrer"
       className="my-1.5 flex justify-center items-center gap-0 flex-col bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-2 py-1 border-2 border-gray-600 pixel-shadow text-center transition-transform duration-300 hover:animate-[wiggle_2s_ease-in-out_infinite] hover:scale-105 cursor-pointer flex-shrink-0 w-[180px]"
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
   );
 };

 return (
   <section id="team" className="w-screen h-screen flex flex-col justify-center items-center relative overflow-hidden pixel-bg-team">
      {/* TITLE */}
      <div className="mb-3 max-[650px]:mb-2 relative z-10">
        <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-4 py-2 border-3 border-gray-600 pixel-shadow max-[650px]:px-3 max-[650px]:py-1">
          <h1 className="text-lg font-bold text-center max-[1350px]:text-base max-[650px]:text-xs max-[500px]:text-[22px]">Our Team</h1>
        </div>
      </div>

      {/* DESKTOP TWO-ROW CAROUSEL */}
      <div className="max-[650px]:hidden relative z-10 border-x-8 border-x-gray-900 w-full max-w-[700px] overflow-hidden">
        <div className="flex flex-col">
          {/* TOP ROW */}
          <div className="marquee overflow-hidden">
            <div className="marquee__track marquee__left">
              {[...firstHalf, ...firstHalf].map((member, i) => <TeamCard key={`top-${i}`} member={member} />)}
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="marquee overflow-hidden">
            <div className="marquee__track marquee__right">
              {[...secondHalf, ...secondHalf].map((member, i) => <TeamCard key={`bottom-${i}`} member={member} />)}
            </div>
          </div>
        </div>
      </div>


     {/* MOBILE TWO-ROW CAROUSEL */}
     <div className="min-[651px]:hidden relative z-10 w-full overflow-x-auto">
       <div className="flex flex-col gap-2">
         {/* Top row - First 7 team members */}
         <div className="flex gap-2 px-4" style={{ width: 'max-content' }}>
           {teamMembers.slice(0, 7).map((member, index) => (
             <a 
               key={index} 
               href={member.linkedin} 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex justify-center items-center gap-0 flex-col bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-2 py-1 border-2 border-gray-600 pixel-shadow text-center transition-transform duration-300 hover:animate-[wiggle_2s_ease-in-out_infinite] hover:scale-105 cursor-pointer flex-shrink-0"
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
         {/* Bottom row - Remaining 6 team members */}
         <div className="flex gap-2 px-4 pb-2" style={{ width: 'max-content' }}>
           {teamMembers.slice(7).map((member, index) => (
             <a 
               key={`bottom-${index + 7}`} 
               href={member.linkedin} 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex justify-center items-center gap-0 flex-col bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-2 py-1 border-2 border-gray-600 pixel-shadow text-center transition-transform duration-300 hover:animate-[wiggle_2s_ease-in-out_infinite] hover:scale-105 cursor-pointer flex-shrink-0"
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
     <div className="min-[651px]:hidden mt-8 text-white font-bold text-sm text-center max-[650px]:text-xs max-[500px]:text-[22px] max-[500px]:mt-4">
       ← Scroll horizontally →
     </div>

     {/* CSS for carousel animations */}
      <style jsx>{`
        .marquee {
          position: relative;
          width: 100%;
        }

        .marquee__track {
          display: flex;
          gap: 0.75rem;
          width: max-content;
          will-change: transform;
        }

        /* Left direction (continuous) */
        .marquee__left {
          animation: marquee-left 25s linear infinite;
        }

        /* Right direction (continuous) */
        .marquee__right {
          animation: marquee-right 25s linear infinite;
        }

        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* Pause on hover - matching the sponsors behavior */
        .marquee:hover .marquee__track {
          animation-play-state: paused;
        }
      `}</style>
   </section>
 )
}

export default Team