import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCocktail } from '../context/CocktailContext'
import Image from '../ui/Image'
import { CardLoader } from '../ui/Loaders'

const Cocktail = () => {
  const { id } = useParams()
  const { loading, item, getCocktail } = useCocktail()

  useEffect(() => {
    const getCocktailData = async () => {
      await getCocktail(id)
    }
    getCocktailData()
  }, [])

  if (loading) return <CardLoader />

  const { strDrink, strDrinkThumb } = item

  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center">
      <h3 className="text-center text-2xl font-semibold md:text-3xl">
        {strDrink}
      </h3>
      <div>
        <Image imageUrl={strDrinkThumb} altText={strDrink} height="100%" />
      </div>
    </div>
  )
}

export default Cocktail
