import './Navbar.css'
import Button from '../Button/Button'
import { LuChevronDown } from 'react-icons/lu'
import { useState } from 'react'

function Navbar() {
    const [isHover, setIsHover] = useState(false)

    return (
    <nav className="nav-container">
        <div className="nav-section">
            <p className="text-xl-title">Meal's Recipe</p>
            <div className="nav-buttons">
                <Button variant='secondary'>SIGN IN</Button>
                <Button variant='primary'>LOGIN</Button>
            </div>
        </div>
        <div className="nav-section">
            <div className="nav-link-container">
                <div>
                    <a className="nav-link text-large-body" href="#recipes" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                        Recipes <LuChevronDown />
                    </a>
                    {isHover && (
                    <div className="nav-dropdown" id="recipes-dropdown" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                        <a className="nav-link text-base-body" href="#breakfast">Starter Meals</a>
                        <a className="nav-link text-base-body" href="#lunch">Vegetarian Meals</a>
                        <a className="nav-link text-base-body" href="#dinner">Surprise Me!</a>
                    </div>
                    )}
                </div>
                <a className="nav-link text-large-body" href="#favorites">Favorites</a>
            </div>
            <div className="nav-link-container">
                <a className="nav-link text-large-body" href="#about">About</a>
                <a className="nav-link text-large-body" href="#contact">Contact</a>
            </div>
        </div>
    </nav> 
    )
}

export default Navbar
