export const cocktailDBUrl = 'https://www.thecocktaildb.com'
export const cocktailDBApiUrl = `${cocktailDBUrl}/api/json/v1/1`

export const getCocktailApi = async id => {
  const FETCH_URL = `${cocktailDBApiUrl}${
    id === 'random' ? `/random.php` : `/lookup.php?i=${id}`
  }`
  const res = await fetch(FETCH_URL)
  const data = await res.json()
  return data.drinks[0]
}

export const getCocktailsApi = async searchValue => {
  const FETCH_URL = `${cocktailDBApiUrl}/search.php?s=${searchValue}`
  const res = await fetch(FETCH_URL)
  const data = await res.json()
  return data.drinks
}

// e.g. filter string - ?a=Non_Alcoholic
export const getCocktailsByFilterApi = async filterString => {
  const FETCH_URL = `${cocktailDBApiUrl}/filter.php${filterString}`
  const res = await fetch(FETCH_URL)
  const data = await res.json()
  return data.drinks
}

