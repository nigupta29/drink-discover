import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
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
  }, [id])

  if (loading) return <CardLoader />

  const {
    strDrinkThumb,
    strDrink,
    strCategory,
    strInstructions,
    strGlass,
    strAlcoholic,
  } = item

  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 text-center lg:flex-row">
      <Image
        imageUrl={strDrinkThumb}
        altText={strDrink}
        className="drop-shadow"
      />

      <div className="space-y-5 rounded-xl border-base-300 px-4  py-5 lg:border-2">
        <h1 className="text-3xl font-bold">{strDrink}</h1>
        <div className="flex flex-wrap justify-center gap-2 font-mono lg:gap-4">
          <div className="badge badge-secondary">{strCategory}</div>
          <div className="badge badge-primary">{strGlass}</div>
          <div className="badge badge-accent">{strAlcoholic}</div>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-bold">Ingredients:</h2>

          <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
            {Object.entries(item)
              .filter(
                ([key, value]) => key.startsWith('strIngredient') && value,
              )
              .map(([key, value]) => {
                const ingredientNumber = key.replace('strIngredient', '')
                const measureKey = `strMeasure${ingredientNumber}`
                const measureValue = item[measureKey]

                return (
                  <Link key={key} to={`/filter?i=${value}`}>
                    <li className="flex min-h-48 flex-col flex-wrap items-center justify-between gap-2 rounded-lg bg-base-200 p-3 hover:scale-105 hover:bg-base-300">
                      <h3 className="font-semibold capitalize">{value}</h3>
                      <p>{measureValue}</p>
                      <img
                        src={`https://www.thecocktaildb.com/images/ingredients/${value}-small.png`}
                        alt=""
                      />
                    </li>
                  </Link>
                )
              })}
          </ul>
          <p className="text-base-content/50">
            Click on any one tabs above to get more ideas!
          </p>
        </div>
        <div className="max-w-xl space-y-2">
          <h2 className="text-xl font-bold">Instructions:</h2>
          <p className="text-justify">{strInstructions}</p>
        </div>
      </div>
    </div>
  )
}

export default Cocktail
