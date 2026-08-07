import { useNavigate, useSearchParams } from 'react-router-dom'
import './DetailRecipe.css'
import { useDetailRecipeMeals } from '../../hooks/useDetailRecipeMeals'
import { LuYoutube, LuHeart, LuCookingPot, LuGlobe, LuCheck, LuShoppingBag, LuListCheck, LuChevronLeft } from 'react-icons/lu'

export function DetailRecipe() {
    const [searchParams] = useSearchParams()
    const id = searchParams.get("id") || ''

    const { detailRecipe, topFiveRelatedRecipe, isLoading } = useDetailRecipeMeals(id)
    const navigate = useNavigate()

    return (
        <article className='detail-recipe-page'>
            <section className='detail-recipe-section'>
                {
                    detailRecipe.map((meal) => {
                        return (
                            <article className='detail-recipe-section__card'>
                                <div className='detail-recipe-section__back-button-container'>
                                    <button onClick={() => {navigate(-1)}} className='detail-recipe-section__back-button text-base-body text-bold'>
                                        <LuChevronLeft /> Back                             
                                    </button>
                                </div>
                                <div className='detail-recipe-section__header'>
                                    <div className='detail-recipe-section__img-container'>
                                        <img src={meal.thumbnail} alt='meal-thumbnail' className='detail-recipe-section__img' />
                                    </div>
                                    <div className='detail-recipe-section__inner-header'>
                                        <div className='detail-recipe-section__text-container'>
                                            <h1 className='text-2xl-title'>{meal.name}</h1>
                                            <div className='detail-recipe-section__identity-list'>
                                                <div className='detail-recipe-section__identity-item text-base-body'><LuCookingPot /> {meal.category}</div>
                                                <div className='vertical-rule vertical-rule--color-gray'></div>
                                                <div className='detail-recipe-section__identity-item text-base-body'><LuGlobe /> {meal.country}</div>
                                            </div>
                                            <p className='text-base-body text--justify'>
                                                {
                                                    meal.category === "Miscellaneous" 
                                                        ? `Discover ${meal.name}, a delicious ${meal.category.toLowerCase()} recipe from ${meal.country}. Made with simple ingredients and easy-to-follow steps, this recipe is perfect for adding rich flavor and vibrant color to your favorite dishes.`
                                                        : `Discover ${meal.name}, a delicious ${meal.category.toLowerCase()} recipe from ${meal.country}. Made with simple ingredients and easy-to-follow steps, this dish is perfect for home cooks looking to prepare a flavorful meal with confidence.`
                                                }
                                                <br /><br />
                                                Ready to cook? Here are the ingredients and instructions!
                                            </p>
                                        </div>
                                        <div className='detail-recipe-section__button-list'>
                                            <button className='detail-recipe-section__youtube-button detail-recipe-section__button-item text-base-body' onClick={() => navigate(meal.youtube)}>
                                                <LuYoutube size={36} className='youtube-icon' />
                                                Watch on YouTube
                                            </button>
                                            <button className='detail-recipe-section__button-item text-base-body text--color-main'><LuHeart className='detail-recipe-section__button-icon' size={24} /> Save the Recipe</button>
                                        </div>
                                    </div>                                    
                                </div>

                                <div className='detail-recipe-section__body'>
                                    <div className='ingredient-container'>
                                        <h2 className='text-xl-title detail-recipe-section__title-text'><LuShoppingBag />Ingredients</h2>
                                        <div className='horizontal-rule--color-border'></div>

                                        {
                                            meal.ingredients.map((ingredient) => {
                                              return (
                                                    <div className='ingredient-item text-base-body'>
                                                        <span className='ingredient-icon-container'><LuCheck size={24} className='ingredient-icon' />{ingredient.name}</span>
                                                        {ingredient.measure}
                                                    </div>
                                                )                                                
                                            }
  
                                            )
                                        }
                                    </div>
                                    <div className='divider divider--color-border'></div>
                                    <div className='instruction-container'>
                                        <h2 className='text-xl-title detail-recipe-section__title-text'><LuListCheck />Instructions</h2>
                                        <div className='horizontal-rule--color-border'></div>
                                        <div className='instruction-list'>
                                            {
                                                meal.instructions
                                                    .map((step) => {
                                                        return (
                                                            <div className='text-base-body instruction-item'>
                                                                <LuCheck size={24} className='ingredient-icon' />
                                                                <p>{step}</p>
                                                            </div>
                                                            
                                                        )                                                        
                                                    }

                                                    )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </article>     
                        )
                    }
                    )
                }

            </section>
            <section className='detail-recipe-section'>
                <div className='related-recipes-container'>
                    <p className='text-large-title'>Related Recipes</p>
                    <div className='related-recipes-container__card-list'>
                        {
                            topFiveRelatedRecipe.map(
                                (meal) => {
                                    return (
                                        <article className='card' key={meal.id} onClick={() => navigate(`/detail-recipe?id=${meal.id}`)}>
                                            <img src={meal.img} alt={meal.title} className='card__img' />
                                            <div className='card-content'>
                                                <p className='text-medium-body text-bold'>{meal.title}</p>
                                                <p className='text-base-body'>{meal.country}</p>
                                            </div>
                                            <LuHeart size={30} className='favorite-logo' onClick={() => navigate("/")} />
                                        </article>
                                    )
                                }
                            )
                        }                        
                    </div>

                </div>
            </section>
        </article>
    )
}