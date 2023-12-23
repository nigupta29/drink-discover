export const initialState = {
  item: {},
  items: [],
  loading: false,
  error: null,
}

export const cocktailReducer = (state, action) => {
  switch (action.type) {
    case 'SET_COCKTAIL':
      // payload : drink <object { idDrink, strDrink, ... }>
      return { ...state, item: action.payload, loading: false }

    case 'SET_COCKTAILS':
      // payload : <Array of drink : <object { idDrink, strDrink, ... }>>
      return { ...state, items: action.payload, loading: false }

    case 'SET_LOADING':
      return { ...state, loading: true }

    case 'SET_ERROR':
      // paylaod : error message <string>
      return { ...state, error: action.payload, loading: false }

    default:
      break
  }
}
