import './Navbar.css'
import Button from '../Button/Button'

function Navbar() {
    return (
    <nav className="nav-container">
        <p className="text-large-title">Meal's <span className='text-color-main'>Recipe</span></p>
        <div className="nav-section">
            <div className='nav-link-container'>
                <a className="nav-link text-medium-body" href="#about">Explore</a>
                <a className="nav-link text-medium-body" href="#contact">Favorite</a>
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
