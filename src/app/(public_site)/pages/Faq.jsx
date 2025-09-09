'use client'

import { useState } from 'react'

const Faq = () => {
 const [openFaq, setOpenFaq] = useState(null)

 const faqData = [
   {
     question: "What is SharkByte?",
     answer: "SharkByte is a weekend-long hackathon where students build innovative projects."
   },
   {
     question: "Who can participate?",
     answer: "All students, regardless of experience level, are welcome to join."
   },
   {
     question: "What should I bring?",
     answer: "Bring your laptop, charger, and a positive attitude! We provide everything else."
   },
   {
     question: "How much does it cost?",
     answer: "SharkByte is completely free including meals and swag."
   }
 ]

 const toggleFaq = (index) => {
   setOpenFaq(openFaq === index ? null : index)
 }

 return (
   <section id='faq' className="w-screen h-screen flex flex-col justify-center items-center relative overflow-hidden pixel-bg-faq px-4">
     {/* TITLE */}
     <div className="mb-4 max-[650px]:mb-3">
       <div className="bg-gray-900 text-white px-4 py-2 border-3 border-gray-600 pixel-shadow max-[650px]:px-3 max-[650px]:py-1">
         <h1 className="text-lg font-bold text-center max-[1350px]:text-base max-[650px]:text-xs">FAQ</h1>
       </div>
     </div>

     {/* FAQ CONTAINER */}
     <div className="w-full max-w-xl max-[650px]:max-w-full">
       <div className="space-y-2 max-[650px]:space-y-1">
         {faqData.map((faq, index) => (
           <div key={index} className="bg-gray-900 border-2 border-gray-600 pixel-shadow transition-transform duration-300 hover:scale-105">
             {/* QUESTION */}
             <button
               onClick={() => toggleFaq(index)}
               className="w-full p-3 text-left text-white flex justify-between items-center max-[650px]:p-2"
             >
               <span className="font-bold text-sm max-[650px]:text-xs pr-4">{faq.question}</span>
               <span className={`text-lg transition-transform duration-300 max-[650px]:text-base flex-shrink-0 ${openFaq === index ? 'rotate-45' : ''}`}>+</span>
             </button>
             
             {/* ANSWER */}
             {openFaq === index && (
               <div className="px-3 pb-3 text-white border-t border-gray-600 max-[650px]:px-2 max-[650px]:pb-2">
                 <p className="text-gray-200 text-sm max-[650px]:text-xs">{faq.answer}</p>
               </div>
             )}
           </div>
         ))}
       </div>
     </div>

     {/* CONTACT */}
     <div className="mt-4 max-[1350px]:mt-3.5 mx-2">
       <div className="bg-gray-900 text-white px-4 py-3 border-3 border-gray-600 pixel-shadow max-[650px]:px-3 max-[650px]:py-2">
         <p className="text-center text-sm max-[1350px]:text-[20px]">
          Can't find your answer? Email us at <a href="mailto:mdc-north@weareinit.org" className="text-[#8b5cf6] hover:underline">mdc-north@weareinit.org</a>
         </p>
       </div>
     </div>
   </section>
 )
}

export default Faq