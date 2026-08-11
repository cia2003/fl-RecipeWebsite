import Header from './components/layout/Header/Header'
import { Footer } from './components/layout/Footer/Footer'
import AppRoutes from './routes/AppRoutes'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <AppRoutes/>
      </main>
      <Footer />
    </div>
  )
}

export default App