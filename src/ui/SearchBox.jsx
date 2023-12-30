import { RiCloseFill, RiSearch2Line } from '@remixicon/react'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useCocktail } from '../context/CocktailContext'

const SearchBox = () => {
  const { loading, reset } = useCocktail()
  const [searchParams, setSearchParams] = useSearchParams()

  const [search, setSearch] = useState(searchParams.get('q') || '')
  const navigate = useNavigate()

  const handelSubmit = async e => {
    e.preventDefault()
    if (!search) return

    navigate(`/search?q=${search.toLowerCase()}`)
    setSearch('')
  }

  const handleClear = () => {
    reset()
    setSearchParams({})
    navigate('/')
    setSearch('')
  }

  return (
    <form
      onSubmit={handelSubmit}
      className={`flex w-full items-center justify-center gap-1 border-b-2 py-1 focus-within:border-primary md:gap-3`}
    >
      <div>
        <RiSearch2Line className="h-6 w-6" />
      </div>

      <input
        type="text"
        placeholder="Mix it up..."
        className="w-full p-3 text-lg focus:border-0 focus:outline-none"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <button type="submit" className="hidden" disabled={loading}></button>

      {search && (
        <button type="reset" onClick={handleClear} className={`btn btn-square`}>
          <RiCloseFill className="h-6 w-6" />
        </button>
      )}
    </form>
  )
}

export default SearchBox
