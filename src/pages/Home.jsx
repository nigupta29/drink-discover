import { Link } from 'react-router-dom'
import {
  alcholTypes,
  categoriesList,
  glassesList,
  ingredientsList,
} from '../utils/filterData'

const Home = () => {
  return (
    <div className="flex w-full flex-col justify-center gap-5 px-4 lg:mx-auto lg:max-w-[1366px]">
      <div className="space-y-5">
        <section className="space-y-3">
          <h3 className="text-xl">Explore by Alcohol Type</h3>

          <ul className="flex flex-wrap gap-5">
            {alcholTypes.map(type => (
              <Link
                key={`${type}`}
                className="btn btn-primary"
                to={`/filter?a=${type}`}
              >
                <li className="capitalize">{type}</li>
              </Link>
            ))}
          </ul>
        </section>
        <section className="space-y-3">
          <h3 className="text-xl">Explore by Categories</h3>

          <ul className="flex flex-wrap gap-5">
            {categoriesList.map(type => (
              <Link
                key={`${type}`}
                className="btn btn-primary"
                to={`/filter?c=${type}`}
              >
                <li className="capitalize">{type}</li>
              </Link>
            ))}
          </ul>
        </section>
        <section className="space-y-3">
          <h3 className="text-xl">Explore by Glasses</h3>

          <ul className="flex flex-wrap gap-5">
            {glassesList.map(type => (
              <Link
                key={`${type}`}
                className="btn btn-primary"
                to={`/filter?g=${type}`}
              >
                <li className="capitalize">{type}</li>
              </Link>
            ))}
          </ul>
        </section>
        <section className="space-y-3">
          <h3 className="text-xl">Explore by Ingredients</h3>

          <ul className="flex flex-wrap gap-5">
            {ingredientsList.map(type => (
              <Link key={`${type}`} to={`/filter?i=${type}`}>
                <div>
                  <li className="capitalize">{type}</li>
                  <img
                    src={`https://www.thecocktaildb.com/images/ingredients/${type}-small.png`}
                    alt=""
                  />
                </div>
              </Link>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Home
