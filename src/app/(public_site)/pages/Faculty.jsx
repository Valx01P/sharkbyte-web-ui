
const Faculty = () => {
  return (
    <section
      id="location"
      className="w-screen min-h-[100dvh] flex flex-col justify-center items-center relative overflow-hidden pixel-bg-faculty py-18 max-[1350px]:py-22 max-[650px]:py-32"
    >
      {/* TITLE */}
      <div className="mx-4 mb-4 max-[650px]:mb-4 mt-8 max-[650px]:mt-2">
        <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-6 py-3 border-3 border-gray-600 pixel-shadow max-[650px]:px-4 max-[650px]:py-2">
          <h1 className="text-lg font-bold text-center max-[1350px]:text-base max-[650px]:text-xs max-[500px]:text-[22px]">
            A special thanks to
          </h1>
        </div>
      </div>

      <ul className="text-white">
        <li>Carmen Butcher</li>
        <li>Charlie Brown</li>
        <li>Demarcus</li>
        <li>Tyrone</li>
      </ul>
    </section>
  )
}

export default Faculty