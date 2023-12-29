import { Link } from 'react-router-dom'
import Image from './Image'

const CocktailCard = ({ item }) => {
  const { idDrink, strDrink, strDrinkThumb } = item

  return (
    <Link to={`/cocktail/${idDrink}`}>
      <div className="relative overflow-hidden rounded-xl bg-base-100 shadow-xl">
        <Image
          imageUrl={strDrinkThumb}
          altText={strDrink}
          height={'18rem'}
          container
        />
        <div className="absolute bottom-0 mb-5 flex h-auto w-full items-center justify-center bg-accent/70 py-1 ">
          <h2 className="text-center font-mono text-xl font-semibold capitalize text-accent-content">
            {strDrink}
          </h2>
        </div>
      </div>
    </Link>
  )
}

export default CocktailCard
