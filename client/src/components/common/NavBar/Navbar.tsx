import './Navbar.css'
import { useState } from 'react'
import { useHomeMeals } from '../../../hooks/useHomeMeals'
import { LuMenu } from 'react-icons/lu'

function Navbar() {
    const [linkName, setLinkName] = useState('')
    const [mobileOpen, setMobileOpen] = useState(false)
    const { singleRandomMeal } = useHomeMeals()

    return (
    <nav className="nav-container">
        <a href='/' className="text-large-title logo-link">Meal's <span className='text-color-main'>Recipe</span></a>

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
                <a className={`nav-link text-medium-body ${linkName === 'explore' ? 'activeNav' : ''}`} href="/explore" onClick={() => setLinkName('explore')}>Explore</a>
                <a className="nav-link text-medium-body" href={
                    singleRandomMeal?.[0]?.id
                        ? `/detail-recipe?id=${singleRandomMeal[0].id}`
                        : '/detail-recipe?id=52772'
                }>Surprise Me!</a>
            </div>
            <div className='nav-link-container__right-section'>
                <div className='nav-link-container'>
                    <a className="nav-link text-medium-body" href="/about">About</a>
                    <a className="nav-link text-medium-body" href="/contact">Contact</a>
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
                        <a className="nav-link text-medium-body" href="/explore" onClick={() => { setLinkName('explore'); setMobileOpen(false) }}>Explore</a>
                        <a className="nav-link text-medium-body" href={
                            singleRandomMeal?.[0]?.id
                                ? `/detail-recipe?id=${singleRandomMeal[0].id}`
                                : '/detail-recipe?id=52772'
                        } onClick={() => setMobileOpen(false)}>Surprise Me!</a>
                        <a className="nav-link text-medium-body" href="/about" onClick={() => setMobileOpen(false)}>About</a>
                        <a className="nav-link text-medium-body" href="/contact" onClick={() => setMobileOpen(false)}>Contact</a>
                    </div>
                </div>
            </div>
        )}
    </nav> 
    )
}

export default Navbar
