'use client'

const About = () => {
 return (
   <section id="about" className="w-screen h-screen flex flex-col justify-center items-center relative overflow-hidden pixel-bg-about">
     {/* TITLE */}
     <div className="mb-6 max-[1350px]:mb-4">
       <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-6 py-3 border-3 border-gray-600 pixel-shadow max-[1350px]:px-4 max-[1350px]:py-2">
         <h1 className="text-lg font-bold text-center max-[1350px]:text-base max-[650px]:text-xs max-[500px]:text-[22px]">About</h1>
       </div>
     </div>

     {/* CONTENT BLOCK - CENTERED */}
     <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white p-6 border-3 border-gray-600 pixel-shadow max-[1350px]:text-sm max-[650px]:text-xs max-[1350px]:p-4 max-[650px]:p-3 max-w-lg mx-4">
       <h2 className="text-[29px] font-bold mb-4 max-[650px]:text-[23px] max-[500px]:text-[22px] max-[500px]:mb-2.5">SharkByte Who?</h2>
       <p className="text-[28px] leading-relaxed max-[1350px]:leading-normal max-[650px]:leading-tight max-[650px]:text-[23px] mb-2 max-[500px]:text-[21px] max-[500px]:mb-1">
         SharkByte is a weekend-long tech sprint where innovation meets caffeine. Whether you're building your first project or aiming to disrupt the status quo, this is your space to code, create, and connect. Stay tuned for more details!
       </p>
     </div>
   </section>
 )
}

export default About