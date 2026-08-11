import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ScrollToTop from './components/common/ScrollToTop.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='/fl-RecipeWebsite'>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
)
