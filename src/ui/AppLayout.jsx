import { Outlet } from 'react-router-dom'
import Error from './Error'
import Navbar from './Navbar/Navbar'
import SearchBox from './SearchBox'

const AppLayout = () => {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-5">
      <Navbar />

      <main className="container mx-auto space-y-5 px-3 md:p-3">
        <Error />
        <SearchBox />
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
