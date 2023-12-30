import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Cocktail from './pages/Cocktail'
import Filter from './pages/Filter'
import Home from './pages/Home'
import Search from './pages/Search'
import AppLayout from './ui/AppLayout'
import Explore from './ui/Explore'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="filter" element={<Filter />} />

          <Route path="cocktail">
            <Route index element={<Navigate to={'/'} replace />} />
            <Route path=":id" element={<Cocktail />} />
          </Route>

          <Route path="explore">
            <Route index element={<Navigate to={'/'} replace />} />
            <Route path=":type" element={<Explore />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
