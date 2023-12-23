import { Link } from 'react-router-dom'
import Image from './Image'

const CocktailCard = ({ item }) => {
  const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strCategory } = item

  return (
    <Link to={`/cocktail/${idDrink}`}>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <Image imageUrl={strDrinkThumb} altText={strDrink} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strDrink}</h2>
          {/* <div className="card-actions justify-end">
            <div className="badge badge-secondary">{strCategory}</div>
            <div className="badge badge-accent">{strAlcoholic}</div>
          </div> */}
        </div>
      </div>
    </Link>
  )
}

export default CocktailCard
