import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCocktail } from '../context/CocktailContext'
import { CardLoader } from '../ui/Loaders'

const Cocktail = () => {
  const { id } = useParams()
  const { loading, item, getCocktail, error } = useCocktail()

  useEffect(() => {
    const getCocktailData = async () => {
      await getCocktail(id)
    }
    getCocktailData()
  }, [])

  if (loading) return <CardLoader />

  return (
    <div className="flex flex-col items-center justify-center">
      {error && <h3 className="alert alert-error">{error}</h3>}
      <h3 className="text-center text-2xl font-semibold md:text-3xl">
        {item?.strDrink}
      </h3>
      <img loading="lazy" src={item?.strDrinkThumb} alt="" />
    </div>
  )
}

export default Cocktail
