const categoryList = [
  'Ordinary Drink',
  'Cocktail',
  'Shake',
  'Other / Unknown',
  'Cocoa',
  'Shot',
  'Coffee / Tea',
  'Homemade Liqueur',
  'Punch / Party Drink',
  'Beer',
  'Soft Drink',
]

const glassesList = [
  'Highball glass',
  'Cocktail glass',
  'Old-fashioned glass',
  'Whiskey Glass',
  'Collins glass',
  'Pousse cafe glass',
  'Champagne flute',
  'Whiskey sour glass',
  'Cordial glass',
  'Brandy snifter',
  'White wine glass',
  'Nick and Nora Glass',
  'Hurricane glass',
  'Coffee mug',
  'Shot glass',
  'Jar',
  'Irish coffee cup',
  'Punch bowl',
  'Pitcher',
  'Pint glass',
  'Copper Mug',
  'Wine Glass',
  'Beer mug',
  'Margarita/Coupette glass',
  'Beer pilsner',
  'Beer Glass',
  'Parfait glass',
  'Mason jar',
  'Margarita glass',
  'Martini Glass',
  'Balloon Glass',
  'Coupe Glass',
]

const ingredientsList = [
  'Light rum',
  'Applejack',
  'Gin',
  'Dark rum',
  'Sweet Vermouth',
  'Strawberry schnapps',
  'Scotch',
  'Apricot brandy',
  'Triple sec',
  'Southern Comfort',
  'Orange bitters',
  'Brandy',
  'Lemon vodka',
  'Blended whiskey',
  'Dry Vermouth',
  'Amaretto',
  'Tea',
  'Champagne',
  'Coffee liqueur',
  'Bourbon',
  'Tequila',
  'Vodka',
  'Añejo rum',
  'Bitters',
  'Sugar',
  'Kahlua',
  'demerara Sugar',
  'Dubonnet Rouge',
  'Watermelon',
  'Lime juice',
  'Irish whiskey',
  'Apple brandy',
  'Carbonated water',
  'Cherry brandy',
  'Creme de Cacao',
  'Grenadine',
  'Port',
  'Coffee brandy',
  'Red wine',
  'Rum',
  'Grapefruit juice',
  'Ricard',
  'Sherry',
  'Cognac',
  'Sloe gin',
  'Apple juice',
  'Pineapple juice',
  'Lemon juice',
  'Sugar syrup',
  'Milk',
  'Strawberries',
  'Chocolate syrup',
  'Yoghurt',
  'Mango',
  'Ginger',
  'Lime',
  'Cantaloupe',
  'Berries',
  'Grapes',
  'Kiwi',
  'Tomato juice',
  'Cocoa powder',
  'Chocolate',
  'Heavy cream',
  'Galliano',
  'Peach Vodka',
  'Ouzo',
  'Coffee',
  'Spiced rum',
  'Water',
  'Espresso',
  'Angelica root',
  'Orange',
  'Cranberries',
  'Johnnie Walker',
  'Apple cider',
  'Everclear',
  'Cranberry juice',
  'Egg yolk',
  'Egg',
  'Grape juice',
  'Peach nectar',
  'Lemon',
  'Firewater',
  'Lemonade',
  'Lager',
  'Whiskey',
  'Absolut Citron',
  'Pisco',
  'Irish cream',
  'Ale',
  'Chocolate liqueur',
  'Midori melon liqueur',
  'Sambuca',
  'Cider',
  'Sprite',
  '7-Up',
  'Blackberry brandy',
  'Peppermint schnapps',
  'Creme de Cassis',
]

const alcoholList = ['Alcoholic', 'Non alcoholic', 'Optional alcohol']

export const getFilterDetailsArray = type => {
  switch (type) {
    case 'alcohol':
      return alcoholList
    case 'glasses':
      return glassesList
    case 'ingredients':
      return ingredientsList
    case 'category':
      return categoryList

    default:
      return null
  }
}
