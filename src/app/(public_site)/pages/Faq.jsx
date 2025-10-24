'use client'

import { useState } from 'react'

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const faqData = [
    {
      question: "What is SharkByte?",
      answer: "SharkByte is Miami Dade College's official hackathon — a free, weekend-long (3 day) event where participants build innovative projects, meet new people, and learn new skills."
    },
    {
      question: "Who can participate?",
      answer: "Anyone 18 years or older can participate, regardless of experience level. Whether you're a beginner or experienced hacker, you're welcome!"
    },
    {
      question: "How will I receive updates and communications?",
      answer: (
        <>
          All communications will be through our{" "}
          <a
            href="https://discord.com/invite/init"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b5cf6] hover:underline"
          >
            Discord
          </a>
          . Make sure to join!
        </>
      )
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, charger, and anything you need to be comfortable during the weekend (like a sleeping bag if you plan to stay overnight)."
    },
    {
      question: "How much does it cost?",
      answer: "SharkByte is completely free! Registration, participation, and even some meals and snacks are provided at no cost."
    }
  ]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section id='faq' className="w-screen flex flex-col justify-center items-center relative overflow-hidden pixel-bg-faq px-4 py-8">
      {/* TITLE */}
      <div className="mb-3 max-[650px]:mb-2">
        <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-4 py-2 border-3 border-gray-600 pixel-shadow max-[650px]:px-3 max-[650px]:py-1">
          <h1 className="text-lg font-bold text-center max-[1350px]:text-base max-[650px]:text-xs max-[500px]:text-[22px]">FAQ</h1>
        </div>
      </div>

      {/* FAQ CONTAINER */}
      <div className="w-full max-w-2xl max-[650px]:max-w-full">
        <div className="space-y-0">
          {faqData.map((faq, index) => (
            <div key={index} className={`bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 border-2 border-gray-600 pixel-shadow transition-transform duration-300 ${openFaq === index ? '' : 'hover:scale-101'}`}>
              {/* QUESTION */}
              <button
                onClick={() => toggleFaq(index)}
                className="hover:cursor-pointer w-full px-3 py-2 text-left text-white flex justify-between items-center max-[650px]:p-2 max-[500px]:py-1"
              >
                <span className="font-bold text-xs max-[650px]:text-xs pr-4 max-[500px]:text-[22px]">{faq.question}</span>
                <span className={`text-lg transition-transform duration-300 max-[650px]:text-base flex-shrink-0 ${openFaq === index ? 'rotate-45' : ''}`}>+</span>
              </button>
              
              {/* ANSWER */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out text-white border-t border-gray-600 ${
                  openFaq === index 
                    ? 'max-h-80 opacity-100' 
                    : 'max-h-0 opacity-0 border-t-transparent'
                }`}
              >
                <div className="px-3 pt-2 pb-2.5 max-[650px]:px-2 max-[650px]:pb-2 max-[650px]:pt-1.5">
                  <p className="text-gray-200 text-[24px] max-[650px]:text-[22px] max-[500px]:text-[19px]">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div className="mt-3 w-full max-w-2xl max-[1350px]:mt-2.5 mx-2">
        <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-4 py-2.5 border-3 border-gray-600 pixel-shadow max-[650px]:px-3 max-[650px]:py-2">
          <p className="text-center text-sm max-[1350px]:text-[24px] max-[500px]:text-[19px]">
            Can't find your answer? Email us at{" "}
            <a
              href="mailto:mdc-north@weareinit.org"
              className="text-[#8b5cf6] hover:underline whitespace-nowrap"
            >
              mdc-north@weareinit.org
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Faq