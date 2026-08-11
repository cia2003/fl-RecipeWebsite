import './Footer.css'
import { Link } from 'react-router-dom'
import { LuGithub, LuLinkedin, LuMessageCircle } from 'react-icons/lu'
import BowlImage from '../../../assets/images/footer/bowl-image.png'
import useHome from '../../../hooks/useHome'

export function Footer() {
  const {
    singleRandomMeal
  } = useHome()
  return (
  <footer className='footer-shell'>
    <div className='footer-content'>
      <div className='footer-contact-section'>
        <div className='footer-branding'>
          <h2 className='text-3xl-title footer-title-container'>Meal's <span className='text-color-main'>Recipe</span></h2>
          <div>
            <p className='text-large-body'>This is a simple recipe's app to search for meal</p>
            <p className='text-large-body'>Want to communicate with us?</p>
          </div>
        </div>

        <div className='footer-contact-links' aria-label='Social and contact links'>
          <a href='https://github.com/cia2003' aria-label='GitHub' target='_blank' rel='noopener noreferrer' className='footer-icon-link'>
            <LuGithub size={24} />
          </a>
          <a href='https://www.linkedin.com/in/gracia-naimora-samosir/' aria-label='LinkedIn' target='_blank' rel='noopener noreferrer' className='footer-icon-link'>
            <LuLinkedin size={24} />
          </a>
          <a href='mailto:graciansamosir03@gmail.com' aria-label='Email' className='footer-icon-link'>
            <LuMessageCircle size={24} />
          </a>
        </div>
      </div>

      <nav className='footer-navigation' aria-label='Footer navigation'>
        <div className='footer-nav-group'>
          <h3 className='text-large-title'>Explore</h3>
          <ul className='footer-nav-list'>
            <li><Link to='/explore?t=category' className='text-large-body'>Categories</Link></li>
            <li><Link to='/explore?t=area' className='text-large-body'>Cuisines</Link></li>
            <li><Link to='/explore?t=ingredient' className='text-large-body'>Ingredients</Link></li>
            <li><Link to={`/detail-recipe?id=${singleRandomMeal[0]?.id ?? '52772'}`} className='text-large-body'>Surprise Me</Link></li>
          </ul>
        </div>

        <div className='footer-nav-group'>
          <h3 className='text-large-title'>Author</h3>
          <ul className='footer-nav-list'>
            <li><Link to='/about' className='text-large-body'>About Us</Link></li>
            <li><Link to='/contact' className='text-large-body'>Contact Us</Link></li>
          </ul>
        </div>
      </nav>

      <div className='footer-reach-out'>
        <h3 className='text-large-title'>Reach Out</h3>
        <p className='text-large-body'>Reach out to learn or give feedback about the website.</p>
        <a href='mailto:graciansamosir03@gmail.com' className='footer-email-link text-base-body'>Email Me!</a>
      </div>
    </div>

    <div className='footer-attribution'>
      <span>© 2026 Meal's Recipe</span>
    </div>

    <img src={BowlImage} alt='' className='footer-bowl-image' />
  </footer>
)
} 
