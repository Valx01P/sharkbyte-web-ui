import Footer from '../components/Footer'

const Socials = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center bg-amber-100 relative overflow-hidden pixel-bg-socials">
      <div className="h-full w-full flex justify-around items-center flex-col pt-[6rem] relative z-10">
        <div className="flex flex-1 w-full flex justify-center items-center">
          <h1>Socials</h1>
        </div>
        <Footer />
      </div>
    </section>
  )
}

export default Socials
