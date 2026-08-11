import { useNavigate, useSearchParams } from 'react-router-dom'
import './DetailRecipe.css'
import { useDetailRecipeMeals } from '../../hooks/useDetailRecipeMeals'
import { LuYoutube, LuCookingPot, LuGlobe, LuShoppingBag, LuListCheck, LuChevronLeft } from 'react-icons/lu'
import { MealCard } from '../../components/common/MealCard/MealCard'
import { MealCardSkeleton } from '../../components/common/MealCard/MealCardSkeleton'

export function DetailRecipe() {
    const [searchParams] = useSearchParams()
    const id = searchParams.get("id") || ''

    const { detailRecipe, topFiveRelatedRecipe, isLoading } = useDetailRecipeMeals(id)
    const navigate = useNavigate()

    return (
        <main className='detail-recipe-page' role='main'>
            <section className='detail-recipe-section' aria-labelledby='detail-recipe-heading'>
                {
                    detailRecipe.map((meal) => {
                        return (
                            <article className='detail-recipe-section__card' key={meal.id || meal.name}>
                                <div className='detail-recipe-section__back-button-container'>
                                    <button type='button' aria-label='Go back to previous page' onClick={() => {navigate(-1)}} className='detail-recipe-section__back-button text-base-body text-bold'>
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
                                            <button type='button' aria-label={meal.youtube === "" ? 'YouTube video unavailable' : 'Watch recipe instructions on YouTube'} className={`detail-recipe-section__youtube-button detail-recipe-section__button-item text-base-body ${meal.youtube === "" ? "youtube-button--disabled" : ""}`} disabled={meal.youtube === ""}  onClick={() => navigate(meal.youtube)}>
                                                <LuYoutube size={36} className={`youtube-icon ${meal.youtube === "" ? 'youtube-icon--disabled' : ''}`} />
                                                Watch on YouTube
                                            </button>
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
                                                    <div key={ingredient.name} className='ingredient-item text-base-body'>
                                                        <span className='ingredient-icon-container'>
                                                            {/* <LuCheck size={24} className='ingredient-icon' /> */}
                                                            {ingredient.name}
                                                        </span>
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
                                                    .map((step, index) => {
                                                        return (
                                                            <div key={index} className='text-base-body instruction-item'>
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
            <section className='detail-recipe-section' aria-labelledby='related-recipes-heading'>
                <div className='related-recipes-container'>
                    <h2 id='related-recipes-heading' className='text-large-title'>Related Recipes</h2>
                    <div className='related-recipes-container__card-list'>
                        {
                            isLoading ? (
                                <MealCardSkeleton count={5} />
                            ) : (
                                topFiveRelatedRecipe.map((meal) => {
                                    return (
                                        <MealCard
                                            key={meal.id}
                                            img={meal.img}
                                            alt={meal.title}
                                            title={meal.title}
                                            country={meal.country}
                                            onClick={() => navigate(`/detail-recipe?id=${meal.id}`)}
                                        />
                                    )
                                })
                            )
                        }                        
                    </div>

                </div>
            </section>
        </main>
    )
}