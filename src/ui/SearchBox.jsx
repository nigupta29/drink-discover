import { RiCloseFill } from '@remixicon/react'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useCocktail } from '../context/CocktailContext'

const SearchBox = () => {
  const { loading, reset } = useCocktail()
  const [searchParams, setSearchParams] = useSearchParams()

  const [search, setSearch] = useState(searchParams.get('q'))
  const navigate = useNavigate()

  const handelSubmit = async e => {
    e.preventDefault()
    if (!search) return

    navigate(`/search?q=${search.toLowerCase()}`)
  }

  const handleClear = () => {
    setSearch('')
    reset()
    setSearchParams({})
  }

  return (
    <form
      onSubmit={handelSubmit}
      className={`gap- flex w-full items-center justify-center border-b-2 border-primary py-2 md:gap-3`}
    >
      <input
        type="text"
        placeholder="Mix it up..."
        className="input flex-grow text-lg focus:border-0 focus:outline-none"
        value={search}
        onChange={e => setSearch(e.target.value)}
        disabled={loading}
      />
      <button type="submit" className="hidden" disabled={loading}></button>
      {search && (
        <button
          type="reset"
          onClick={handleClear}
          className={`btn btn-square btn-ghost p-0`}
        >
          <RiCloseFill className="h-6 w-6" />
        </button>
      )}
    </form>
  )
}

export default SearchBox
