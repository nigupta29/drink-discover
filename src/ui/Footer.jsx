const Footer = () => {
  return (
    <footer className="rounded-t-xl bg-gray-800 p-6 text-center text-white">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <p>&copy; 2023 Drink Discover</p>
        <p>
          Crafted with ❤️ by <span className="font-bold">Nikhil Gupta</span>
        </p>
        <a
          href="https://github.com/nigupta29/drink-discover"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-200"
        >
          Star on GitHub
        </a>
      </div>
    </footer>
  )
}

export default Footer
