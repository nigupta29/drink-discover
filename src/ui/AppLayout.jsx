import { Outlet } from 'react-router-dom'
import Error from './Error'
import Navbar from './Navbar'

const AppLayout = () => {
  return (
    <div className="flex flex-col gap-8">
      <Navbar />

      <main className="mx-auto px-5 container">
        <Error />
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
