import PropTypes from 'prop-types'
import { createContext, useContext, useReducer } from 'react'
import { getCocktailApi, getCocktailsApi } from '../services/apiCocktailDB'
import { cocktailReducer, initialState } from './CocktailReducer'

const CocktailContext = createContext()

export const CocktailProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cocktailReducer, initialState)

  const setLoading = () => dispatch({ type: 'SET_LOADING' })
  const setError = message => dispatch({ type: 'SET_ERROR', payload: message })

  const getCocktail = async id => {
    try {
      setLoading()
      const randomCocktailData = await getCocktailApi(id)
      dispatch({ type: 'SET_COCKTAIL', payload: randomCocktailData })
    } catch (error) {
      setError(error.message)
    }
  }

  const getCocktails = async searchValue => {
    try {
      setLoading()
      const cocktailData = await getCocktailsApi(searchValue)
      dispatch({ type: 'SET_COCKTAILS', payload: cocktailData })
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <CocktailContext.Provider value={{ ...state, getCocktail, getCocktails }}>
      {children}
    </CocktailContext.Provider>
  )
}

CocktailProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useCocktail = () => {
  const context = useContext(CocktailContext)

  if (!context) {
    throw new Error(`useCocktail must be used within a CocktailProvider`)
  }

  return context
}
