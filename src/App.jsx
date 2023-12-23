import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cocktail from './pages/Cocktail'
import Home from './pages/Home'
import AppLayout from './ui/AppLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/cocktail/:id" element={<Cocktail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
