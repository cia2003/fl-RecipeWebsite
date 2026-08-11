import './Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHomeMeals } from '../../../hooks/useHomeMeals'
import { LuMenu } from 'react-icons/lu'

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const { singleRandomMeal } = useHomeMeals()

    return (
    <nav className="nav-container">
        <Link to='/' className="text-large-title logo-link">Meal's <span className='text-color-main'>Recipe</span></Link>

        <button
            type="button"
            className="nav-hamburger"
            aria-label="Open navigation"
            onClick={() => setMobileOpen(true)}
        >
            <LuMenu size={24} />
        </button>

        <div className="nav-section">
            <div className='nav-link-container'>
                <Link className='nav-link text-medium-body' to="/explore">Explore</Link>
                <Link className="nav-link text-medium-body" to={
                    singleRandomMeal?.[0]?.id
                        ? `/detail-recipe?id=${singleRandomMeal[0].id}`
                        : '/detail-recipe?id=52772'
                }>Surprise Me!</Link>
            </div>
            <div className='nav-link-container__right-section'>
                <div className='nav-link-container'>
                    <Link className="nav-link text-medium-body" to="/about">About</Link>
                    <Link className="nav-link text-medium-body" to="/contact">Contact</Link>
                </div>              
            </div>

        </div>

        {mobileOpen && (
            <div className="nav-mobile-overlay" role="dialog" aria-modal="true" onClick={() => setMobileOpen(false)}>
                <div className="nav-mobile-panel" onClick={(event) => event.stopPropagation()}>
                    <div className='nav-link-container nav-link-container--justify-space-between'>
                        <p className='text-large-body text-bold'>Menu</p>
                        <button
                            type="button"
                            className="nav-close-button"
                            aria-label="Close navigation"
                            onClick={() => setMobileOpen(false)}
                        >
                            ×
                        </button>                        
                    </div>


                    <div className='nav-link-container mobile'>
                        <Link className="nav-link text-medium-body" to="/explore" onClick={() => { setMobileOpen(false) }}>Explore</Link>
                        <Link className="nav-link text-medium-body" to={
                            singleRandomMeal?.[0]?.id
                                ? `/detail-recipe?id=${singleRandomMeal[0].id}`
                                : '/detail-recipe?id=52772'
                        } onClick={() => setMobileOpen(false)}>Surprise Me!</Link>
                        <Link className="nav-link text-medium-body" to="/about" onClick={() => setMobileOpen(false)}>About</Link>
                        <Link className="nav-link text-medium-body" to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
                    </div>
                </div>
            </div>
        )}
    </nav> 
    )
}

export default Navbar
