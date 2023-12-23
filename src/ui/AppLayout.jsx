import { Outlet } from 'react-router-dom'
import Error from './Error'
import Navbar from './Navbar'

const AppLayout = () => {
  return (
    <div className="flex flex-col gap-3">
      <Navbar />

      <main className="mx-auto w-full px-5 md:max-w-5xl">
        <Error />
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
