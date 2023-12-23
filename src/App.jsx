import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cocktail from './pages/Cocktail'
import Home from './pages/Home'
import Navbar from './ui/Navbar'

const App = () => {
  return (
    <div className="flex flex-col gap-5">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/cocktail/:id" element={<Cocktail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
