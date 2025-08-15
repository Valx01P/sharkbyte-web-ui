const Navbar = () => {
  return (
    <nav className="fixed px-4 top-0 z-10 w-full shadow-2xl bg-transparent">
      <div className="flex">
        {/* logo */}
        <div className="center-left w-full">
          <h1>SharkByte</h1>
        </div>

        {/* nav links */}
        <ul className="center-spaced gap-6 w-full">
          <li className="max-medium:hidden">About</li>
          <li className="max-medium:hidden">Schedule</li>
          <li className="max-medium:hidden">FAQ</li>
          <li className="max-medium:hidden">Sponsors</li>
        </ul>

        {/* signup / login */}
        <div className="center-right w-full">
          <button className="max-medium:hidden bg-white px-3 border-3 pixel-shadow">Register</button>
          {/* mobile hamburger menu nav */}
          <div className="min-medium:hidden"></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
