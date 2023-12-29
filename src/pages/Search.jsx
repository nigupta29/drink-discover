import { useCallback, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useCocktail } from '../context/CocktailContext'
import CocktailCard from '../ui/CocktailCard'
import Loaders from '../ui/Loaders'
import SearchBox from '../ui/SearchBox'

const Search = () => {
  const { loading, items, getCocktails } = useCocktail()

  const [searchParams, setSearchParams] = useSearchParams()
  const q = searchParams.get('q')

  const fetchSearchResults = useCallback(async () => {
    await getCocktails(q.toLowerCase())
  }, [q])

  useEffect(() => {
    if (!q) return

    fetchSearchResults()

    return () => {}
  }, [searchParams, fetchSearchResults, q])

  return (
    <div className="flex w-full flex-col justify-center gap-5 px-4 lg:mx-auto lg:max-w-[1366px]">
      <SearchBox setSearchParams={setSearchParams} />
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
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

export default Search
