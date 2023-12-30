import { RiErrorWarningLine } from '@remixicon/react'
import { useCocktail } from '../context/CocktailContext'

const Error = () => {
  const { error } = useCocktail()

  return (
    error && (
      <div
        role="alert"
        className="alert alert-error animate-pulse justify-center"
      >
        <RiErrorWarningLine />
        <span>{error}</span>
      </div>
    )
  )
}

export default Error
