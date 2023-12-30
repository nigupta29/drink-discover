const AboutSection = () => {
  return (
    <div className="my-8 border-t-2 py-4">
      <h2 className="mb-4 text-3xl font-bold">About This Project</h2>
      <p className="mb-4">
        Welcome to our cocktail exploration platform! This application is
        meticulously crafted with React, Tailwind CSS, and Daisy UI to offer a
        seamless and visually appealing experience. The modern and responsive
        design is enhanced by Remix Icons, providing intuitive visual elements.
      </p>

      <h3 className="mb-2 text-xl font-bold">How It Works</h3>
      <p className="mb-4">
        Discover an extensive collection of cocktails sourced from TheCocktailDB
        API. Utilizing React, our application dynamically fetches and displays
        cocktail recipes, allowing users to explore and expand their mixology
        skills. The stylish presentation, powered by Tailwind CSS and Daisy UI,
        ensures an aesthetically pleasing interface.
      </p>

      <h3 className="mb-2 text-xl font-bold">Important Information</h3>
      <span className="font-bold text-info">Drink Responsibly:</span>

      <p>
        While we encourage the joy of discovering new beverages, we prioritize
        responsible drinking. Please be mindful of your alcohol consumption, and
        ensure you enjoy our cocktail offerings responsibly.
      </p>

      <p>
        Explore, create, and savor the world of cocktails responsibly with our
        thoughtfully designed application! Cheers! 🍹✨
      </p>
    </div>
  )
}

export default AboutSection
