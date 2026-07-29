import './Home.css'
import { useEffect, useState } from 'react'
import Button from '../../components/common/Button/Button'
import type { MealCard } from '../../types/meal.types'
import { useMeals } from '../../hooks/useMeals'
import { useNavigate } from 'react-router-dom'

const categories = ['Chicken', 'Beef', 'Pork']

const mealImageUrl = (meal: MealCard) => `${meal.img}/medium`

function Home() {
  const [fourRandomMeals, setFourRandomMeals] = useState<MealCard[]>([])
  const [filteredMeals, setFilteredMeals] = useState<MealCard[]>([])
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>('Chicken')

  const { getFourRandomMeals, getMealsByCategory, isLoading } = useMeals()

  const navigate = useNavigate()

  useEffect(() => {
    let isCurrent = true

    const loadMeals = async () => {
      const meals = await getFourRandomMeals()

      if (isCurrent && meals) {
        setFourRandomMeals(meals as MealCard[])
      }
    }

    void loadMeals()

    return () => {
      isCurrent = false
    }
  }, [getFourRandomMeals])

  useEffect(() => {
    let isCurrent = true

    const loadMeals = async () => {
      const meals = await getMealsByCategory(selectedCategory, 0, 4)

      if (isCurrent && meals) {
        setFilteredMeals(meals as MealCard[])
      }
    }

    void loadMeals()

    return () => {
      isCurrent = false
    }
  }, [getMealsByCategory, selectedCategory])

  return (
    <article className="home-page">

      <section className="recommended-section home-section">
        <div className="section-header">
          <h2 className="text-xl-title" style={{ whiteSpace: 'nowrap' }}>
            Recommended for You
          </h2>
          <div className="horizontal-rule"></div>
        </div>
        
        <div className="home-section-content recommended-cards-container">
          {isLoading && <p className="text-base-body">Loading recipes…</p>}

          {fourRandomMeals[0] && (
            <article className='featured-card'>
              <img src={mealImageUrl(fourRandomMeals[0])} alt={fourRandomMeals[0].title} />
              <h3 className='text-large-title featured-card-title'>{fourRandomMeals[0].title}</h3>
            </article>
          )}

          {fourRandomMeals.slice(1).map((meal) => (
            <article className='small-card' key={meal.id}>
              <img src={mealImageUrl(meal)} alt={meal.title} />
              <h3 className='text-large-title small-card-title'>{meal.title}</h3>
            </article>
          ))}

        </div>
      </section>

      <section className="categories-section home-section">
        <div className="section-header">
          <h2 className="text-xl-title" style={{ whiteSpace: 'nowrap' }}>
            Popular Categories
          </h2>
          <div className="horizontal-rule"></div>
        </div>

        <div className="home-section-content categories-cards-container">
          <div className="categories-cards-filter">
            {categories.map((category) => (
              <button
                className={`category-filter-btn text-large-body ${selectedCategory === category ? 'active' : ''}`}
                key={category}
                onClick={() => setSelectedCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>

          <div className='categories-cards-result'>
            {isLoading && <p className="text-base-body">Loading recipes…</p>}

            {!isLoading && filteredMeals.map((meal) => (
              <article className='small-card' key={meal.id}>
                <img src={mealImageUrl(meal)} alt={meal.title} />
                <h3 className='text-large-title small-card-title'>{meal.title}</h3>
              </article>        
            ))}
          </div>

        </div>
      </section>

      <section className="explore-section home-section">
        {fourRandomMeals[0] && (
          <img
            aria-hidden="true"
            className="explore-img"
            src={"https://www.idealyrecipes.com/wp-content/uploads/2025/10/agar-vs-gelatin-fruit-cubes.webp"}
            alt="food-img"
          />
        )}
        <div className='explore-content'>
          <h2 className='text-xl-title explore-title'>WANT TO SEE OTHER RECIPES?</h2>
          <Button variant="primary" onClick={() => navigate('/recipes')}>
            EXPLORE OUR MENU
          </Button>          
        </div>

      </section>
    </article>
  )
}

export default Home
