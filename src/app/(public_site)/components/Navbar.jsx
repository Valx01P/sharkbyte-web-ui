const Navbar = () => {
  return (
    <nav className="fixed top-0 z-10 w-full shadow-2xl bg-transparent">
      <div className="center-spaced">
        {/* logo */}
        <div className="min-w-8 w-32 center-left">
          <h1>SharkByte</h1>
        </div>

        {/* nav links */}
        <ul className="center-spaced gap-6">
          <li className="max-tablet:hidden">About</li>
          <li className="max-tablet:hidden">Schedule</li>
          <li className="max-tablet:hidden">FAQ</li>
          <li className="max-tablet:hidden">Sponsors</li>
        </ul>

        {/* signup / login */}
        <div className="min-w-8 w-32 center-right">
          <h1>Register</h1>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
