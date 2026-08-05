import './Navbar.css'
import Button from '../Button/Button'
import { useState } from 'react'

function Navbar() {
    const [linkName, setLinkName] = useState('')
    
    return (
    <nav className="nav-container">
        <a href='/' className="text-large-title logo-link">Meal's <span className='text-color-main'>Recipe</span></a>
        <div className="nav-section">
            <div className='nav-link-container'>
                <a className={`nav-link text-medium-body ${linkName === 'explore' ? '.activeNav' : ''}`} href="/explore" onClick={() => setLinkName('explore')}>Explore</a>
                <a className="nav-link text-medium-body" href="#favorite">Favorite</a>
            </div>
            <div className='nav-link-container__right-section'>
                <div className='nav-link-container'>
                    <a className="nav-link text-medium-body" href="#about">About</a>
                    <a className="nav-link text-medium-body" href="#contact">Contact</a>
                </div>
                <div className="nav-buttons">
                    <Button variant='secondary' size='medium'>SIGN IN</Button>
                    <Button variant='primary' size='medium'>LOGIN</Button>
                </div>                
            </div>

        </div>
    </nav> 
    )
}

export default Navbar
