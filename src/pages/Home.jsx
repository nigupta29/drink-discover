import { useCocktail } from '../context/CocktailContext'

const Home = () => {
  const { loading, items } = useCocktail()

  return (
    <div className="flex w-full flex-col justify-center gap-5 px-4 lg:mx-auto lg:max-w-[1366px]">
      Home
    </div>
  )
}

export default Home
