import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'
import ArrayMethods from './components/arrayMethods/arraymethods'
import Counter from './components/Counter/counterapp'
import Snowfall from 'react-snowfall'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ArrayMethods />
    <Counter />
    <Snowfall />
  </StrictMode>,
)
