import './Recipes.css'
import Button from '../../components/common/Button/Button'
import type { MealCard } from '../../types/meal.types'
import { useState, useEffect } from 'react'
import { useMeals } from '../../hooks/useMeals'
import { useNavigate } from 'react-router-dom'

const categories = ['Starter', 'Vegetarian', 'Seafood'] as const

type Category = (typeof categories)[number]

const mealImageUrl = (meal: MealCard) => `${meal.img}/medium`

function Recipes() {
    const [mealsByCategory, setMealsByCategory] = useState<Record<Category, MealCard[]>>({
        Starter: [],
        Vegetarian: [],
        Seafood: [],
    })
    const { getMealsByCategory, isLoading } = useMeals()
    const navigate = useNavigate()
    
    useEffect(() => {
        let isCurrent = true

        const loadMeals = async () => {
            const meals = await Promise.all(
                categories.map((category) => getMealsByCategory(category, 0, 4))
            )

            if (isCurrent) {
                setMealsByCategory({
                    Starter: (meals[0] ?? []) as MealCard[],
                    Vegetarian: (meals[1] ?? []) as MealCard[],
                    Seafood: (meals[2] ?? []) as MealCard[],
                })
            }
        }

        void loadMeals()

        return () => {
        isCurrent = false
        }
    }, [getMealsByCategory])

    return (
        <article>
            <section className='recipe-section'>
                <div className='section-header intro-header'>
                    <h1 className='text-3xl-title'>Recipes</h1>
                    <p className='text-large-body'>
                        More than 100+ meals that you can try <br /> 
                        from each categories
                    </p>                   
                </div>
                <div className='search-form-container'>
                    <form action="POST">
                        <input type="text" />
                    </form>
                </div>
            </section>

            {
                categories.map((category) => {
                    return (
                        <section className='recipe-section' key={category}>
                            <div className="section-header">
                                <h2 className="text-xl-title" style={{ whiteSpace: 'nowrap' }}>
                                    {category} Recipes
                                </h2>
                                <div className="horizontal-rule"></div>
                            </div>
                            <div className='recipe-content'>
                                {isLoading && <p className="text-base-body">Loading recipes…</p>}

                                {!isLoading && mealsByCategory[category].map((meal) => (
                                <article className='small-card' key={meal.id}>
                                    <img src={mealImageUrl(meal)} alt={meal.title} />
                                    <h3 className='text-large-title small-card-title'>{meal.title}</h3>
                                </article>        
                                ))}
                            </div>
                            <div>
                                <Button variant="primary" onClick={() => navigate(`/recipes/category`)}>
                                    Explore {category} Recipes
                                </Button>  
                            </div>
                        </section>                          
                    )
                  
                })

            }
        </article>
    )
}

export default Recipes
