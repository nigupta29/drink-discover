import { RiHome2Line } from '@remixicon/react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <div className="my-8 space-y-3 text-center">
        <h2 className="text-3xl font-bold">404 - Page Not Found</h2>
        <p>Oops! The page you are looking for does not exist.</p>
        <Link to={'/'} className="btn btn-accent">
          <span>Home</span>
          <RiHome2Line />
        </Link>
      </div>
    </>
  )
}

export default NotFound
