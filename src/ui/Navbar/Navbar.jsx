import { RiGobletLine } from '@remixicon/react'
import { navItems } from '../../utils/navData'
import NavLinkItem from './NavLinkItem'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 flex w-full items-center justify-between bg-base-300 p-3 shadow-lg md:top-3 md:ml-3 md:mt-3 md:h-[calc(80vh)] md:w-fit md:flex-col md:rounded-lg md:py-5 md:drop-shadow-xl">
      <NavLinkItem
        Icon={RiGobletLine}
        title="Discover your Poison!!"
        link="/"
        square
      />

      <nav className="flex rounded-full bg-base-100 p-1 transition-all duration-500 md:flex-col md:gap-3 lg:gap-6">
        {navItems.map(item => (
          <NavLinkItem key={item.title} {...item} />
        ))}
      </nav>

      <a
        href="https://github.com/nigupta29"
        target="__blank__"
        className="avatar btn btn-square btn-ghost"
        rel={'noreferrer noopener'}
      >
        <div className="w-10 rounded-lg">
          <img src="https://avatars.githubusercontent.com/u/128571356?v=4" />
        </div>
      </a>
    </header>
  )
}

export default Navbar
