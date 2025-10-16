'use client'

import Image from "next/image"

const Sponsors = () => {
  const sponsors = [
    {
      href: "https://www.mdc.edu/north/",
      src: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757480616/mdc_ijuvcd.png",
      alt: "mdc_north_logo",
      className: "max-[1050px]:w-[120px] max-[700px]:w-[100px]"
    },
    {
      href: "https://www.mdc.edu/entec/",
      src: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757480615/entec_tjnwm3.png",
      alt: "entec_mdc_logo",
      className: "max-[1050px]:w-[120px] max-[700px]:w-[100px]"
    },
    {
      href: "https://www.roocapital.com/",
      src: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757480616/roo_capital_zqae68.png",
      alt: "roo_capital_logo",
      height: 190,
      width: 190,
      className: "max-[1050px]:w-[160px] max-[1050px]:h-[140px] max-[700px]:w-[120px] max-[700px]:h-[120px] max-[700px]:hover:scale-100"
    },
    {
      href: "https://www.perplexity.ai/",
      src: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1760653896/Perplexity_AI_logo.svg_tljxnl.png",
      height: 190,
      width: 190,
      alt: "perplexity_logo",
      className: "max-[1050px]:w-[140px] max-[700px]:w-[100px]"
    },
    {
      href: "https://www.microsoft.com/en-us/",
      src: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1760476530/RE1Mu3b_ptqsa6.png",
      height: 180,
      width: 180,
      alt: "microsoft_logo",
      className: "max-[1050px]:w-[130px] max-[700px]:w-[110px]"
    },
    {
      href: "https://www.purebuttons.com/",
      src: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1760476530/Pure-Buttons-Logo_gyr5mi.png",
      alt: "pure_buttons_logo",
      className: "max-[1050px]:w-[130px] max-[700px]:w-[110px]"
    },
    {
      href: "https://4geeks.com/",
      src: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1760114351/original_hmujtp.png",
      alt: "4_geeks_academy_logo",
      className: "max-[1050px]:w-[130px] max-[700px]:w-[110px]"
    },
    {
      href: "https://cybriant.com/",
      src: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1760114351/4b451e0c-fb5a-45db-82fb-a0688c6847ac-removebg-preview_fqdgxm.png",
      alt: "cybriant_logo",
      height: 190,
      width: 190,
      className: "max-[1050px]:w-[180px] max-[1050px]:h-[170px] max-[700px]:w-[120px] max-[700px]:h-[120px] max-[700px]:hover:scale-100"
    },
    {
      href: "https://miamitechworks.org/",
      src: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1760114352/MiamiTechWorks-logo_p3petk.svg",
      alt: "miami_tech_works_logo",
      height: 190,
      width: 190,
      className: "max-[1050px]:w-[160px] max-[1050px]:h-[140px] max-[700px]:w-[120px] max-[700px]:h-[120px] max-[700px]:hover:scale-100"
    },
    {
      href: "https://www.redbull.com/",
      src: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757706321/redbull_ouhiwo.svg",
      alt: "redbull_logo",
      height: 190,
      width: 190,
      className: "max-[1050px]:w-[160px] max-[1050px]:h-[140px] max-[700px]:w-[120px] max-[700px]:h-[120px] max-[700px]:hover:scale-100"
    }
  ];

  // Split sponsors into two rows (5 and 5)
  const firstRow = sponsors.slice(0, 5);
  const secondRow = sponsors.slice(5);

  const SponsorCard = ({ sponsor }) => (
    <a 
      href={sponsor.href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="my-1.5 flex justify-center items-center transition-transform duration-300 hover:scale-110 border-3 border-gray-600 pixel-shadow bg-gradient-to-br from-white to-gray-300 py-2 min-h-[260px] min-w-[260px] max-[1350px]:min-w-[240px] max-[1350px]:min-h-[240px] max-[1050px]:min-w-[210px] max-[1050px]:min-h-[210px] max-[700px]:min-w-[160px] max-[700px]:min-h-[160px] max-[700px]:py-0 flex-shrink-0"
    >
      <Image
        src={sponsor.src}
        height={sponsor.height || 140}
        width={sponsor.width || 140}
        alt={sponsor.alt}
        className={sponsor.className}
      />
    </a>
  );

  return (
    <section id="sponsors" className="w-screen h-screen flex flex-col justify-center items-center relative overflow-hidden pixel-bg-sponsors px-4">
      {/* TITLE */}
      <div className="mb-3 max-[650px]:mb-2 relative z-10">
        <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-4 py-2 border-3 border-gray-600 pixel-shadow max-[650px]:px-3 max-[650px]:py-1">
          <h1 className="text-lg font-bold text-center max-[1350px]:text-base max-[650px]:text-xs max-[500px]:text-[22px]">Sponsored By</h1>
        </div>
      </div>

      {/* DESKTOP TWO-ROW CAROUSEL */}
      <div className="max-[650px]:hidden relative z-10 border-x-8 border-x-gray-900 w-full max-w-lg mx-auto overflow-hidden">
        <div className="flex flex-col">
          {/* TOP ROW */}
          <div className="marquee overflow-hidden">
            <div className="marquee__track marquee__left">
              {[...firstRow, ...firstRow].map((sponsor, i) => <SponsorCard key={`top-${i}`} sponsor={sponsor} />)}
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="marquee overflow-hidden">
            <div className="marquee__track marquee__right">
              {[...secondRow, ...secondRow].map((sponsor, i) => <SponsorCard key={`bottom-${i}`} sponsor={sponsor} />)}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE TWO-ROW SCROLL */}
      <div className="min-[651px]:hidden relative z-10 w-full overflow-x-auto">
        <div className="flex flex-col gap-2">
          {/* Top row - First 5 sponsors */}
          <div className="flex gap-2 px-4" style={{ width: 'max-content' }}>
            {sponsors.slice(0, 5).map((sponsor, index) => (
              <SponsorCard key={`top-${index}`} sponsor={sponsor} />
            ))}
          </div>
          {/* Bottom row - Last 5 sponsors */}
          <div className="flex gap-2 px-4 pb-2" style={{ width: 'max-content' }}>
            {sponsors.slice(5).map((sponsor, index) => (
              <SponsorCard key={`bottom-${index}`} sponsor={sponsor} />
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE SCROLL INDICATOR */}
      <div className="min-[651px]:hidden z-20 mt-8 text-white font-bold text-sm text-center max-[650px]:text-xs max-[500px]:text-[22px] max-[500px]:mt-4">
        ← Scroll horizontally →
      </div>
        
      {/* SPONSOR CTA */}
      <div className="w-[550px] relative z-10 mx-2 max-[650px]:w-[500px] max-[600px]:w-[400px] max-[500px]:w-[360px] max-[390px]:w-[300px] mt-4">
        <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-2 py-3 border-3 border-gray-600 pixel-shadow max-[650px]:px-3 max-[650px]:py-2">
          <p className="text-center text-sm max-[1350px]:text-[24px] max-[500px]:text-[19px]">
            Want to sponsor? Email us at{" "}
            <a
              href="mailto:mdc-north@weareinit.org"
              className="text-[#8b5cf6] hover:underline whitespace-nowrap"
            >
              mdc-north@weareinit.org
            </a>
          </p>
        </div>
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
          animation: marquee-left 30s linear infinite;
        }

        /* Right direction (continuous) */
        .marquee__right {
          animation: marquee-right 30s linear infinite;
        }

        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* Pause on hover */
        .marquee:hover .marquee__track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default Sponsors