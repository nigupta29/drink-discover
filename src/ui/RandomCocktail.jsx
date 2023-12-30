import { RiArrowRightUpLine } from '@remixicon/react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCocktail } from '../context/CocktailContext'
import Image from './Image'
import { CardImageLoader } from './Loaders'

const RandomCocktail = () => {
  const { loading, item, getCocktail } = useCocktail()

  useEffect(() => {
    const getCocktailData = async () => {
      await getCocktail('random')
    }
    getCocktailData()
  }, [])

  if (loading)
    return (
      <div className="h-[24rem] overflow-hidden rounded-lg md:h-[22rem] md:w-1/2">
        <CardImageLoader />
      </div>
    )

  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-base-200 p-2 md:w-fit md:flex-row md:gap-5 md:p-5">
      {item && (
        <>
          <div className={'w-full md:w-fit'}>
            <Image
              imageUrl={item.strDrinkThumb}
              altText={item.strDrink}
              height={'20rem'}
            />
          </div>
          <div className="flex h-full flex-grow flex-col items-center justify-between space-y-5 text-center md:items-start md:text-start">
            <div>
              <h1 className="mb-2 text-3xl font-bold capitalize">
                {item.strDrink}
              </h1>
              <p className="mb-2 text-base-content/50">
                {`Here's your surprise poison.`}
              </p>
              <div className="flex flex-wrap justify-center gap-2 font-mono md:justify-start lg:gap-4">
                <div className="badge badge-primary">{item.strCategory}</div>
                <div className="badge badge-secondary">{item.strGlass}</div>
                <div className="badge badge-accent">{item.strAlcoholic}</div>
              </div>
            </div>
            <Link
              to={`/cocktail/${item.idDrink}`}
              className="group btn btn-neutral"
            >
              Check Out
              <span className="ml-1 transition-all duration-200 group-hover:ml-2">
                <RiArrowRightUpLine />
              </span>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default RandomCocktail
