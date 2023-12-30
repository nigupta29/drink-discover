import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useCocktail } from '../context/CocktailContext'
import CocktailCard from '../ui/CocktailCard'
import Loaders from '../ui/Loaders'

const Search = () => {
  const { loading, items, getCocktails, reset } = useCocktail()

  const location = useLocation()
  const q = location.search?.split('=')[1]

  useEffect(() => {
    if (!q) return

    const fetchSearchResults = async () => {
      await getCocktails(q.toLowerCase())
    }

    fetchSearchResults()

    return () => reset()
  }, [q])

  return (
    <div className="container mx-auto space-y-5">
      {!items && <p className="text-xl">{`No results for '${q}'`}</p>}
      {!!items?.length && (
        <h3 className="text-3xl font-semibold">{`Found ${items.length} results for '${q}' `}</h3>
      )}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <Loaders />
        ) : (
          <>
            {items?.map(item => (
              <CocktailCard key={item.idDrink} item={item} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default Search
