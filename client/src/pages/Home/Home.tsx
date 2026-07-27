import './Home.css'
import { useEffect, useState } from 'react'
import Card from '../../components/common/Card/Card'
import Button from '../../components/common/Button/Button'
import useHomeActions, { type MealCard } from './useHomeActions'

function Home() {
  const {
    getFourRandomMeals,
    isLoading,
  } = useHomeActions()
  
  const [threeRandomMeals, setThreeRandomMeals] = useState<MealCard[]>([])

  useEffect(() => {
    let isCurrent = true

    const loadMeals = async () => {
      const meals = await getFourRandomMeals()

      if (isCurrent && meals) {
        setThreeRandomMeals(meals as MealCard[])
      }
    }

    void loadMeals()

    return () => {
      isCurrent = false
    }
  }, [getFourRandomMeals])

  return (
    <article className="home-page">

      <section className="recommended-section home-section">
        <div className="home-section-header">
          <h2 className="text-xl-title" style={{ whiteSpace: 'nowrap' }}>
            Recommended for You
          </h2>
          <div className="horizontal-rule"></div>
        </div>
        
        <div className="home-section-content recommended-cards-container">
          {isLoading && <p className="text-base-body">Loading recipes…</p>}

          {threeRandomMeals[0] && (
            <article className='featured-card'>
              <img src={threeRandomMeals[0].img + "/medium"} alt={threeRandomMeals[0].id} />
              <h3 className='text-large-title featured-card-title'>{threeRandomMeals[0].title}</h3>
            </article>
          )}

          {threeRandomMeals.slice(1).map((meal) => (
            <article className='small-card'>
              <img src={meal.img + "/medium"} alt={meal.id} />
              <h3 className='text-large-title small-card-title'>{meal.title}</h3>
            </article>
          ))}

        </div>

        <div>
          <Button variant="primary">
            SEE MORE RECIPE
          </Button>
        </div>
      </section>

      <section className="categories-section home-section">
        <div className="home-section-header">
          <h2 className="text-xl-title" style={{ whiteSpace: 'nowrap' }}>
            Popular Categories
          </h2>
          <div className="horizontal-rule"></div>
        </div>

        <div className="home-section-content categories-cards-container">
          <div className="categories-cards-filter">
            <div className="category-filter-btn text-large-body">Chicken</div>
            <div className="category-filter-btn text-large-body">Beef</div>
            <div className="category-filter-btn text-large-body">Pork</div>
          </div>

          <div className='categories-cards-result'>
            {}
            <Card id="category1" title="Category 1">
              <p className="text-base-body">This is the content of Category 1.</p>
            </Card>
            <Card id="category2" title="Category 2">
              <p className="text-base-body">This is the content of Category 2.</p>
            </Card>
            <Card id="category3" title="Category 3">
              <p className="text-base-body">This is the content of Category 3.</p>
            </Card>
            <Card id="category3" title="Category 3">
              <p className="text-base-body">This is the content of Category 3.</p>
            </Card>
          </div>

        </div>
      </section>

      <section className="explore-section home-section">
        <h2 className='text-xl-title'>WANT TO SEE OTHER RECIPES?</h2>
          <Button variant="primary">
            EXPLORE OUR MENU
          </Button>
      </section>
    </article>
  )
}

export default Home
