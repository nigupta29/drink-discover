import { Outlet } from 'react-router-dom'
import Error from './Error'
import Navbar from './Navbar/Navbar'

const AppLayout = () => {
  return (
    <div className="flex flex-col gap-5 md:flex-row">
      <Navbar />

      <main className="container mx-auto p-3">
        <Error />
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
