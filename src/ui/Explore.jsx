import { Link, Navigate, useParams } from 'react-router-dom'
import { getFilterDetailsArray } from '../utils/filterData'

const Explore = () => {
  const { type } = useParams()

  const filterData = getFilterDetailsArray(type.toLowerCase()).sort()

  if (!filterData) return <Navigate to="/" replace />

  return (
    <section className="space-y-5">
      <h3 className="text-2xl md:text-3xl">
        Explore by
        <p className="ml-1 inline-flex capitalize text-primary-content underline decoration-primary">
          {type}
        </p>
      </h3>
      <p className="text-base-content/50">{`Click on any one to get this party started!`}</p>

      <ul className="grid grid-cols-3 gap-5 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {filterData.map(item => (
          <Link
            key={`${item}`}
            className="btn flex h-auto flex-col py-2 "
            to={`/filter?${type.charAt(0)}=${item}`}
          >
            {type === 'ingredients' && (
              <img
                src={`https://www.thecocktaildb.com/images/ingredients/${item}-small.png`}
                alt=""
              />
            )}
            <li className="capitalize">{item}</li>
          </Link>
        ))}
      </ul>
    </section>
  )
}

export default Explore
