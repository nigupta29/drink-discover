import { Outlet } from 'react-router-dom'
import Error from './Error'
import Footer from './Footer'
import Navbar from './Navbar/Navbar'
import SearchBox from './SearchBox'

const AppLayout = () => {
  return (
    <>
      <div className="flex flex-col gap-2 md:flex-row md:gap-5">
        <Navbar />

        <section className="container mx-auto flex min-h-screen flex-col justify-between px-3 md:pt-3 gap-10">
          <div className="space-y-5">
            <Error />
            <SearchBox />
            <main>
              <Outlet />
            </main>
          </div>
          <Footer />
        </section>
      </div>
    </>
  )
}

export default AppLayout
