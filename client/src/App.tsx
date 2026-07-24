import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import Home from './pages/Home/Home'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App