import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CocktailProvider } from './context/CocktailContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CocktailProvider>
      <App />
    </CocktailProvider>
  </React.StrictMode>,
)
