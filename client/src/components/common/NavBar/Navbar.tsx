import './Navbar.css'
import Button from '../Button/Button'
import { LuChevronDown } from 'react-icons/lu'



const Navbar = () => (
    <nav className="nav-container">
        <div className="nav-section">
            <p className="text-xl">Meal's Recipe</p>
            <div className="nav-buttons">
                <Button variant='secondary'>SIGN IN</Button>
                <Button variant='primary'>LOGIN</Button>
            </div>
        </div>
        <div className="nav-section">
            <div className="nav-link-container">
                <a className="nav-link text-large-body" href="#recipes">Recipes <LuChevronDown /></a>
                <a className="nav-link text-large-body" href="#favorites">Favorites</a>
            </div>
            <div className="nav-link-container">
                <a className="nav-link text-large-body" href="#about">About</a>
                <a className="nav-link text-large-body" href="#contact">Contact</a>
            </div>
        </div>
    </nav>
)

export default Navbar
