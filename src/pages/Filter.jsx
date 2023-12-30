import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useCocktail } from '../context/CocktailContext'
import CocktailCard from '../ui/CocktailCard'
import Loaders from '../ui/Loaders'

const Filter = () => {
  const location = useLocation()
  const { loading, items, getCocktailsByFilter, reset } = useCocktail()

  useEffect(() => {
    const { search } = location
    if (search && search !== '') {
      console.log(search)
      const fetchData = async () => {
        await getCocktailsByFilter(search)
      }

      fetchData()
    }

    return () => reset()
  }, [location])

  return (
    <div className="space-y-8">
      {!loading && items && (
        <h3 className="text-2xl md:text-3xl">
          {`Showing ${items?.length} Cocktails related to `}
          <span className="capitalize underline decoration-primary">
            {location.search.split('=')[1].replaceAll('%20', ' ')}
          </span>
        </h3>
      )}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <Loaders />
        ) : (
          <>
            {!items && <p>No search results</p>}
            {items?.map(item => (
              <CocktailCard key={item.idDrink} item={item} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default Filter
