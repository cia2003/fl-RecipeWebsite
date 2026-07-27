import './Footer.css'
import Button from '../../common/Button/Button'

const Footer = () => (
  <footer className="footer-shell">
    <div className='footer-content'>
      <div className='footer-contact-section'>
        <h2 className='text-3xl-title'>RECIPE'S MEAL</h2>

        <div>
          <p className='text-large-body'>This is a simple recipe's app to search for meal</p>
          <p className='text-large-body'>Want to communicate with us?</p>          
        </div>

        <Button variant="primary" onClick={() => {}}>
          CONTACT US
        </Button>
      </div>

      <div className='footer-nav'>
        <div className='footer-nav-list'>
          <h3 className='text-large-title'>Recipes</h3>
          <a className='text-large-body'>Starter Meals</a>
          <a className='text-large-body'>Vegetarian Meals</a>
          <a className='text-large-body'>Surprise Me!</a>
        </div>
        <div className='footer-nav-list'>
          <h3 className='text-large-title'>About</h3>
          <a className='text-large-body'>Our Team</a>
        </div>
        <div className='footer-nav-list'>
          <h3 className='text-large-title'>Contact</h3>
          <a className='text-large-body'>Email</a>
          <a className='text-large-body'>LinkedIn</a>
          <a className='text-large-body'>Github</a>
        </div>
      </div>
    </div>

    <div className="footer-attribution">
      <span>© 2026 Meal's Recipe</span>
    </div>
  </footer>
)

export default Footer
