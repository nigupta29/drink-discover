import { Link } from 'react-router-dom'
import AboutSection from '../ui/AboutSection'
import RandomCocktail from '../ui/RandomCocktail'
import { navItems } from '../utils/navData'

const Home = () => {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-5 lg:flex-row">
        <RandomCocktail />
        <div className="w-full lg:w-1/2">
          <h3 className="mb-8 text-center text-3xl font-semibold lg:mb-12 lg:text-start lg:text-4xl">
            Explore
          </h3>
          <div className="grid grid-cols-2 gap-8">
            {navItems.map(item => (
              <Link
                to={item.link}
                key={item.id}
                className="w-full rounded-xl bg-gradient-to-r from-primary to-accent p-5 hover:scale-105 hover:bg-gradient-to-tr"
              >
                <item.Icon className="mb-3 h-10 w-10 fill-gray-700" />
                <h4 className="my-auto text-xl capitalize text-primary-content">
                  {item.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <AboutSection />
    </div>
  )
}

export default Home
