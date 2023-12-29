import { RiBeerLine, RiGobletFill, RiMenu2Line } from '@remixicon/react'
import { Link } from 'react-router-dom'
import ThemeChange from './ThemeChange'

const Navbar = () => {
  return (
    <div className="navbar mx-auto max-w-2xl shadow-md shadow-base-300 sm:mt-2 sm:rounded-badge">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
            <RiMenu2Line />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow-md"
          >
            <li>
              <Link to="/">Explore</Link>
            </li>
            <li>
              <Link to="/search">Find</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold no-underline md:text-xl"
        >
          <span>Drink</span>
          <RiGobletFill className="fill-primary" />
          <span>Discover</span>
        </Link>
      </div>
      <div className="navbar-end">
        <div
          className="tooltip tooltip-bottom tooltip-secondary"
          data-tip="Random Cocktail"
        >
          <Link to={'/cocktail/random'} className="btn btn-circle btn-ghost">
            <RiBeerLine />
          </Link>
        </div>
        <ThemeChange />
      </div>
    </div>
  )
}

export default Navbar
