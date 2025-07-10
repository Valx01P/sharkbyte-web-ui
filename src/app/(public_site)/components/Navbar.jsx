
const Navbar = () => {
  return (
    <nav className="fixed top-0 z-10 w-full shadow-2xl bg-transparent">
      <div className="center-spaced bg-green-300">
        {/* logo */}
        <div className="min-w-8 w-32 center-left max-tablet:bg-blue-300 bg-red-300">
          <h1>logo</h1>
        </div>

        {/* nav links */}
        <ul className="center-spaced gap-6 max-tablet:bg-blue-300 bg-red-300">
          <li>faq</li>
          <li>about</li>
          <li>sponsor</li>
        </ul>
        
        {/* signup / login */}
        <div className="min-w-8 w-32 center-right max-tablet:bg-blue-300 bg-red-300">
          <h1>signup</h1>
        </div>
      </div>
    </nav>
  )
}

export default Navbar