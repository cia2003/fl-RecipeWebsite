import './Favorite.css'
import { LuHeart, LuSearch } from 'react-icons/lu'
import UnknownImage from '../../assets/images/not-found-img.png'

export function Favorite() {
    return (
        <article className="favorite-page">
            <section className="favorite-section">
                <div className='favorite-section__header'>
                    <div className='favorite-section__header__title-text-container'>
                        <LuHeart size={24} className='favorite-section__header__title-text-icon' />
                        <h1 className='text-xl-title'>My Favorite Recipes</h1>
                    </div>
                    <p className='text-base-body'>Your saved recipes, ready for your next delicious meal.</p>
                </div>

                <div className='favorite-section__navigation'>
                    <div className='favorite-section__navigation-list'>
                        <div className='favorite-section__navigation-item'>
                            <input type="text" className='text-base-body favorite-section__input' placeholder='Search by name' />
                            <LuSearch className='favorite-section__icon' />
                        </div>
                        <div className='favorite-section__navigation-item'>
                            <label htmlFor="category" className='favorite-section__label hidden'>Category</label>
                            <select id="category" className='favorite-section__select-container text-base-body'>
                                <option value="all">All Categories</option>
                                <option value="beef">Beef</option>
                                <option value="chicken">Chicken</option>
                                <option value="dessert">Dessert</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='favorite-section__card-container'>
                    <div className='favorite-section__card-list'>
                        <article
                            className='card'
                        >
                            <img src={UnknownImage} className='card__img' />
                            <div className='card-content'>
                                <p className='text-medium-body text-bold'>Food Name</p>
                                <p className='text-base-body'>Food Country</p>
                            </div>
                            <LuHeart
                                size={30}
                                className='favorite-logo'
                                onClick={(event) => {
                                    event.stopPropagation()
                                    // add favorite handling
                                }}
                            />
                        </article>
                    </div>
                </div>
            </section>
        </article>
    )
}