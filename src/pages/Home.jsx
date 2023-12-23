import Loaders from '../ui/Loaders'
import SearchBox from '../ui/SearchBox'

const Home = () => {
  return (
    <div className="flex w-full flex-col justify-center gap-10 px-4 lg:mx-auto lg:max-w-[1366px]">
      <SearchBox />
      <Loaders />
    </div>
  )
}

export default Home
