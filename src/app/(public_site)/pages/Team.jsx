'use client'

const Team = () => {
 const teamMembers = [
   {
     name: "Alex Rodriguez",
     role: "Director",
     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
   },
   {
     name: "Sarah Chen",
     role: "Design",
     image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww?w=1200&h=1400&fit=crop&crop=face"
   },
   {
     name: "Marcus Johnson",
     role: "Web Dev",
     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
   },
   {
     name: "Emily Davis",
     role: "Operations",
     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
   },
   {
     name: "Jordan Kim",
     role: "Outreach",
     image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=80&h=80&fit=crop&crop=face"
   }
 ]

 return (
   <section className="w-screen h-screen flex flex-col justify-center items-center relative overflow-hidden pixel-bg-team">
     {/* TITLE */}
     <div className="mb-3 max-[650px]:mb-2 relative z-10">
       <div className="bg-gray-900 text-white px-4 py-2 border-3 border-gray-600 pixel-shadow max-[650px]:px-3 max-[650px]:py-1">
         <h1 className="text-lg font-bold text-center max-[1350px]:text-base max-[650px]:text-xs">Our Team</h1>
       </div>
     </div>

     {/* TEAM GRID */}
     <div className="relative z-10 grid grid-cols-3 gap-3 max-[650px]:gap-2">
       {/* Top row - 3 members */}
       {teamMembers.slice(0, 3).map((member, index) => (
         <div key={index} className="bg-gray-900 text-white p-2 border-2 border-gray-600 pixel-shadow text-center max-[650px]:p-1.5 transition-transform duration-300 hover:animate-[wiggle_2s_ease-in-out_infinite] cursor-pointer">
           <img 
             src={member.image} 
             alt={member.name}
             className="w-12 h-12 rounded-full mx-auto mb-1 border border-gray-600 max-[650px]:w-10 max-[650px]:h-10"
           />
           <h3 className="font-bold text-xs max-[650px]:text-[18px]">{member.name}</h3>
           <p className="text-gray-300 text-[22px] max-[650px]:text-[17px]">{member.role}</p>
         </div>
       ))}
     </div>

     {/* Bottom row - 2 members centered */}
     <div className="relative z-10 grid grid-cols-2 gap-3 mt-3 max-[650px]:gap-2 max-[650px]:mt-2">
       {teamMembers.slice(3, 5).map((member, index) => (
         <div key={index} className="bg-gray-900 text-white p-2 border-2 border-gray-600 pixel-shadow text-center max-[650px]:p-1.5 transition-transform duration-300 hover:animate-[wiggle_2s_ease-in-out_infinite] cursor-pointer">
           <img 
             src={member.image} 
             alt={member.name}
             className="w-12 h-12 rounded-full mx-auto mb-1 border border-gray-600 max-[650px]:w-10 max-[650px]:h-10"
           />
           <h3 className="font-bold text-xs max-[650px]:text-[18px]">{member.name}</h3>
           <p className="text-gray-300 text-[22px] max-[650px]:text-[17px]">{member.role}</p>
         </div>
       ))}
     </div>
   </section>
 )
}

export default Team