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
  console.log(FETCH_URL)
  const res = await fetch(FETCH_URL)
  const data = await res.json()
  console.log(data)
  return data.drinks
}
