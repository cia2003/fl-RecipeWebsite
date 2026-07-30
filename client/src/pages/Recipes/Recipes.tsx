import './Recipes.css'
import { LuX, LuMessageCircleWarning, LuChevronDown, LuChevronUp, LuChevronRight,LuChevronLeft, LuAlbum, LuSearch } from 'react-icons/lu'
import Button from '../../components/common/Button/Button'

function Recipes() {
    return (
        <article className="recipes-page">
            <section className='recipes-section'>
                <div className="section-header">
                    <h2 className="text-xl-title" style={{ whiteSpace: 'nowrap' }}>
                        Find your recipe here
                    </h2>
                    <div className="horizontal-rule"></div>
                </div>
                <div className='search-form-container'>
                    <form action="" className='search-form'>
                        <input type="text" placeholder='Search for a recipe, ingredient, or dish...' className='search-input text-medium-body'/>
                        <button type='submit' className='search-button text-base-body'>Search <LuSearch /> </button>
                    </form>
                </div> 

                <div className='active-filter-container'>
                    <div className='tag-container'>
                        <p className='text-large-body'>Active Filter: </p>
                        <div className=''></div>
                        <span className='tag-filter text-base-body'>Category: Seafood <button type='button' className='btn-icon'><LuX /></button> </span>
                    </div>
                    <div className='filter-warning-container'>
                        <span className='text-base-body filter-warning'><LuMessageCircleWarning /> Only one filter type can be active at a time. Choose another filter to replace the current one</span>
                    </div>
                </div>

                <div className='recipes-content'>
                    <div className='recipes-content-filter'>
                        <p className='text-large-body'>Filter By</p>
                        <div className='dropdown-menu'>
                            <div className='dropdown-menu-container'><span className='text-base-body dropdown-logo'><LuAlbum /> Category</span> <LuChevronDown /> </div>
                        </div>
                        <div className='dropdown-menu'>
                            <div className='dropdown-menu-container'><span className='text-base-body dropdown-logo'><LuAlbum /> Cuisine Area</span> <LuChevronDown /> </div>
                        </div>
                        <div className='dropdown-menu'>
                            <div className='dropdown-menu-container'><span className='text-base-body dropdown-logo'><LuAlbum /> Main Ingredient</span> <LuChevronUp /> </div>
                            <div className='radio-group'>
                                <div className='radio-item'>
                                    <input type="radio" id='id1' name='main-ingredient' />
                                    <label htmlFor="id1">Radio 1</label><br />                              
                                </div>
                                <div className='radio-item'>
                                    <input type="radio" id='id2' name='main-ingredient' />
                                    <label htmlFor="id2">Radio 2</label><br />                              
                                </div>
                                <button className='extended-button'>See More</button>
                            </div>
                        </div>
                    </div>

                    <div className='recipes-card-container'>
                        <div className='text-medium-body search-title-text'>Seafood Recipe <span className='text-medium-body'>(x results)</span></div>
                        <article className='meal-card'>
                            <img src="https://th.bing.com/th/id/OIP.nFIK7s8trKlrI9N-7SQbCgHaLH?w=188&h=282&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3" alt="" className='meal-card__img' />
                            <div className='meal-card-content'>
                                <p className='text-large-body'>Grilled Salmon</p>
                                <p className='text-base-body'>Japan</p>
                            </div>
                            <a href="#" className='meal-card__link text-base-body'>See the recipe <LuChevronRight /></a>
                        </article>
                        <article className='meal-card'>
                            <img src="https://th.bing.com/th/id/OIP.nFIK7s8trKlrI9N-7SQbCgHaLH?w=188&h=282&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3" alt="" className='meal-card__img' />
                            <div className='meal-card-content'>
                                <p className='text-large-body'>Grilled Salmon</p>
                                <p className='text-base-body'>Japan</p>
                            </div>
                            <a href="#" className='meal-card__link text-base-body'>See the recipe <LuChevronRight /></a>
                        </article>
                        <article className='meal-card'>
                            <img src="https://th.bing.com/th/id/OIP.nFIK7s8trKlrI9N-7SQbCgHaLH?w=188&h=282&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3" alt="" className='meal-card__img' />
                            <div className='meal-card-content'>
                                <p className='text-large-body'>Grilled Salmon</p>
                                <p className='text-base-body'>Japan</p>
                            </div>
                            <a href="#" className='meal-card__link text-base-body'>See the recipe <LuChevronRight /></a>
                        </article>
                        <article className='meal-card'>
                            <img src="https://th.bing.com/th/id/OIP.nFIK7s8trKlrI9N-7SQbCgHaLH?w=188&h=282&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3" alt="" className='meal-card__img' />
                            <div className='meal-card-content'>
                                <p className='text-large-body'>Grilled Salmon</p>
                                <p className='text-base-body'>Japan</p>
                            </div>
                            <a href="#" className='meal-card__link text-base-body'>See the recipe <LuChevronRight /></a>
                        </article>
                        <article className='meal-card'>
                            <img src="https://th.bing.com/th/id/OIP.nFIK7s8trKlrI9N-7SQbCgHaLH?w=188&h=282&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3" alt="" className='meal-card__img' />
                            <div className='meal-card-content'>
                                <p className='text-large-body'>Grilled Salmon</p>
                                <p className='text-base-body'>Japan</p>
                            </div>
                            <a href="#" className='meal-card__link text-base-body'>See the recipe <LuChevronRight /></a>
                        </article>
                        <article className='meal-card'>
                            <img src="https://th.bing.com/th/id/OIP.nFIK7s8trKlrI9N-7SQbCgHaLH?w=188&h=282&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3" alt="" className='meal-card__img' />
                            <div className='meal-card-content'>
                                <p className='text-large-body'>Grilled Salmon</p>
                                <p className='text-base-body'>Japan</p>
                            </div>
                            <a href="#" className='meal-card__link text-base-body'>See the recipe <LuChevronRight /></a>
                        </article>
                    </div>
                    <div className='page-track-container'>
                        <LuChevronLeft />
                        <div>
                            <input type="number" className='page-number' />/20
                        </div>
                        <LuChevronRight />
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Recipes