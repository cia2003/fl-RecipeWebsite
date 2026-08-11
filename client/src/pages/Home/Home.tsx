import './Home.css'
import { Link } from 'react-router-dom'
import { MealCard } from '../../components/common/MealCard/MealCard'
import { MealCardSkeleton } from '../../components/common/MealCard/MealCardSkeleton'

import { LuSearch, LuChevronRight } from 'react-icons/lu'
import { useHome } from '../../hooks/useHome'

import Button from '../../components/common/Button/Button'
import HeroImage from '../../assets/images/hero-section-home.jpg'
import ExploreImage from "../../assets/images/explore-section-home.jpg"
import RandomMealBackgroundImage from "../../assets/images/random-meals-home.png"

import landmarks from '../../data/landmark'

function Home() {
  const {
    keyword,
    setKeyword,
    randomMeals,
    singleRandomMeal,
    browserableCategory,
    browserableIngredient,
    isLoading,
    handleSubmit,
    goToDetail,
    goToResults
  } = useHome()

  return (
    <main className="home-page" role="main">

      <section className='hero-section' aria-labelledby='home-hero-title'>
        <img src={HeroImage} alt="" aria-hidden='true' className='hero-img' />
        <div className='hero-content'>
          <div className='hero-inner-content'>
            <h1 id='home-hero-title' className='text-2xl-title'>
              Discover Delicious <br />
              Meals <span>You'll Love</span>
            </h1>
            <p className='text-large-body'>
              Explore thousands of recipes from around the world. <br />
              Find your next favorite meal!
            </p>
            <div className='search-form-container'>
              <form onSubmit={handleSubmit} className='search-form' role='search'>
                <label htmlFor='home-search' className='sr-only'>Search recipes</label>
                <input id='home-search' value={keyword} onChange={(e) => setKeyword(e.target.value)} type="text" placeholder='Search recipe by name' className='search-input text-medium-body'/>
                <button type='submit' className='search-button text-base-body' aria-label='Search recipes'>Search <LuSearch /> </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className='home-section' aria-labelledby='recommended-meals-heading'>
        <div className='home-section__header'>
          <div className='home-section__text-container'>
            <div className='home-section__inner-text-container'>
              <h2 id='recommended-meals-heading' className='text-large-title'>Recommended Meals</h2>
              <p className='text-medium-body'>Get inspired by a recommended selection of meals.</p>
            </div>
          </div>
          <Link to="/explore" className='text-medium-body home-section__link' aria-label='See more recipes'>See more recipes <LuChevronRight /></Link>
        </div>
        <div className='home-section__body'>
          {isLoading ? (
            <MealCardSkeleton count={5} />
          ) : (
            randomMeals.map((meal) => {
              return (
                <MealCard
                  key={meal.id}
                  img={meal.img}
                  alt={meal.title}
                  title={meal.title}
                  country={meal.country}
                  tag={meal.category}
                  onClick={() => goToDetail(meal.id)}
                />
              )
            })
          )}
        </div>
      </section>

      <section className='home-section' aria-labelledby='browse-categories-heading'>
        <div className='home-section__header'>
          <div className='home-section__text-container'>
            <div className='home-section__inner-text-container'>
              <h2 id='browse-categories-heading' className='text-large-title'>Browse by Category</h2>
              <p className='text-medium-body'>Quickly find recipes by meal category.</p>
            </div>
          </div>
          <Link to="/explore?t=category" className='text-medium-body home-section__link' aria-label='View all categories'>View All Categories <LuChevronRight /></Link>
        </div>
        <div className='home-section__body'>
          {isLoading ? (
            <MealCardSkeleton count={5} showContent={false} />
          ) : (
            browserableCategory.map((category) => {
              return (
                <MealCard
                  key={category.name}
                  img={category.img}
                  alt={category.name}
                  tag={category.name}
                  onClick={() => goToResults(`/home/results?t=category&q=${category.name}`)}
                />
              )
            })
          )}
        </div>
      </section>

      <section className='explore-section'>
        <img src={RandomMealBackgroundImage} alt="explore-image-home" className='explore-section-img' />
          <div className='explore-section__header'>
          <div className='explore-section__text-container'>
            <p className='text-xl-title'>Still confused about what to eat today?</p>
            <p className='text-medium-body'>Discover a random recipe and get inspired for your next meal.</p>            
          </div>
          <Button variant='primary' onClick={() => goToDetail(singleRandomMeal[0]?.id)}>SURPRISE ME!</Button>
        </div>
        
      </section>

      <section className='home-section' aria-labelledby='browse-ingredients-heading'>
        <div className='home-section__header'>
          <div className='home-section__text-container'>
            <div className='home-section__inner-text-container'>
              <h2 id='browse-ingredients-heading' className='text-large-title'>Browse by Main Ingredient</h2>
              <p className='text-medium-body'>Find recipes using your favorite ingredients.</p>
            </div>
          </div>
          <Link to="/explore?t=ingredient" className='text-medium-body home-section__link' aria-label='View all ingredients'>View All Ingredients <LuChevronRight /></Link>
        </div>
        <div className='home-section__body'>
          {isLoading ? (
            <MealCardSkeleton count={5} showContent={false} />
          ) : (
            browserableIngredient.map((ingredient) => {
              return (
                <MealCard
                  key={ingredient.name}
                  img={ingredient.img}
                  alt={ingredient.name}
                  tag={ingredient.name}
                  onClick={() => goToResults(`/home/results?t=ingredient&q=${ingredient.name}`)}
                />
              )
            })
          )}
        </div>
      </section>
    
      <section className='home-section' aria-labelledby='browse-cuisines-heading'>
        <div className='home-section__header'>
          <div className='home-section__text-container'>
            <div className='home-section__inner-text-container'>
              <h2 id='browse-cuisines-heading' className='text-large-title'>Browse by Cuisine (Area)</h2>
              <p className='text-medium-body'>Explore recipes from cuisines around the world.</p>
            </div>
          </div>
            <Link to="/explore?t=area" className='text-medium-body home-section__link' aria-label='View all cuisines'>View All Cuisines <LuChevronRight /></Link>
        </div>
        <div className='home-section__body'>
            {
            landmarks.map((landmark) => {
              return (
                <button
                  type='button'
                  className='card landmark-card'
                  key={landmark.name}
                  onClick={() => goToResults(`/home/results?t=country&q=${landmark.country}`)}
                  aria-label={`Explore recipes from ${landmark.country}`}
                >
                    <img src={landmark.img} alt='' aria-hidden='true' className='card__img' />
                    <p className='text-base-body tag card-tag'>{landmark.country}</p>
                </button>
              )
            })
          }
        </div>
      </section>

      <section className='explore-section'>
        <img src={ExploreImage} alt="explore-image-home" className='explore-section-img' />
          <div className='explore-section__header'>
          <div className='explore-section__text-container'>
            <p className='text-xl-title'>Want to explore more recipes?</p>
            <p className='text-medium-body'>Browse our fill collection and find the perfect meal for any occasion.</p>            
          </div>
          <Button variant='primary' onClick={() => goToResults('/explore')}>EXPLORE ALL RECIPES <LuChevronRight /></Button>
        </div>
        
      </section>

    </main>
  )
}

export default Home
