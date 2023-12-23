import { RiCloseFill, RiSearchLine } from '@remixicon/react'
import { useState } from 'react'

const SearchBox = () => {
  const [search, setSearch] = useState('')

  const handelSubmit = e => {
    e.preventDefault()
  }

  return (
    <form
      onSubmit={handelSubmit}
      className={`mx-auto flex items-center justify-center gap-1 border-b-2 border-primary py-2 focus-within:w-full md:gap-3 ${
        search ? 'w-full' : ''
      }`}
    >
      <RiSearchLine className="h-6 w-6" />
      <input
        type="text"
        placeholder="Mix it up..."
        className="input flex-grow text-lg focus:border-0 focus:outline-none"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {search && (
        <button
          type="reset"
          onClick={() => setSearch('')}
          className={`btn btn-square btn-ghost`}
        >
          <RiCloseFill className="h-6 w-6" />
        </button>
      )}
      <button type="submit" className="hidden"></button>
    </form>
  )
}

export default SearchBox
