import './Home.css'
import '../../components/common/Card/Card.css'

import { LuSearch, LuDices, LuChevronRight, LuLeaf, LuGlobe, LuCookingPot, LuHeart } from 'react-icons/lu'
import { useHomeMeals } from '../../hooks/useHomeMeals'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/common/Button/Button'
import HeroImage from '../../assets/images/hero-section-home.jpg'
import ExploreImage from "../../assets/images/explore-section-home.jpg"
import RandomMealBackgroundImage from "../../assets/images/random-meals-home.png"

import landmarks from '../../data/landmark'
import { useState } from 'react'

function Home() {
  const [keyword, setKeyword] = useState('')
  const { randomMeals, browserableCategory, browserableIngredient, isLoading } = useHomeMeals()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!keyword.trim()) return

    navigate(`/home/results?type=name&q=${keyword}`)
  }

  return (
    <article className="home-page">

      <section className='hero-section'>
        <img src={HeroImage} alt="hero-image-page" className='hero-img' />
        <div className='hero-content'>
          <div className='hero-inner-content'>
            <h1 className='text-2xl-title'>
              Discover Delicious <br />
              Meals <span>You'll Love</span>
            </h1>
            <p className='text-large-body'>
              Explore thousands of recipes from around the world. <br />
              Find your next favorite meal!
            </p>
            <div className='search-form-container'>
              <form onSubmit={handleSubmit} onChange={(e) => setKeyword(e.target.value)} className='search-form'>
                <input type="text" placeholder='Search recipe by name' className='search-input text-medium-body'/>
                <button type='submit' className='search-button text-base-body'>Search <LuSearch /> </button>
              </form>
            </div>            
          </div>
        </div>
      </section>

      <section className='home-section'>
        <div className='home-section__header'>
          <div className='home-section__text-container'>
            <LuDices size={50} className='home-section__icon' />
            <div className='home-section__inner-text-container'>
              <h2 className='text-large-title'>Recommended Meals</h2>
              <p className='text-medium-body'>Get inspired by a recommended selection of meals.</p>
            </div>
          </div>
          <a href="/explore" className='text-medium-body home-section__link'>See more recipes <LuChevronRight /></a>
        </div>
        <div className='home-section__body'>
          {isLoading && <p>Loading...</p>}
          {
            randomMeals.map((meal) => {
              return (
                <article className='card' key={meal.id} onClick={() => console.log(meal.title)}>
                    <img src={meal.img} alt={meal.title} className='card__img' />
                    <div className='card-content'>
                        <p className='text-medium-body text-bold'>{meal.title}</p>
                        <p className='text-base-body'>{meal.country}</p>
                    </div>
                    <p className='text-base-body tag card-tag'>{meal.category}</p>
                    <LuHeart size={30} className='favorite-logo' onClick={() => navigate("/")} />
                </article>
              )
            })
          }
        </div>
      </section>

      <section className='home-section'>
        <div className='home-section__header'>
          <div className='home-section__text-container'>
            <LuLeaf size={50} className='home-section__icon' />
            <div className='home-section__inner-text-container'>
              <h2 className='text-large-title'>Browse by Category</h2>
              <p className='text-medium-body'>Quickly find recipes by meal category.</p>
            </div>
          </div>
          <a href="/explore?type=category" className='text-medium-body home-section__link'>View All Categories <LuChevronRight /></a>
        </div>
        <div className='home-section__body'>
          {isLoading && <p>Loading...</p>}
          {
            browserableCategory.map((category) => {
              return (
                <article className='card' key={category.name} onClick={() => navigate(`/home/results?type=category&q=${category.name}`)}>
                    <img src={category.img} alt={category.name} className='card__img' />
                    <p className='text-base-body tag card-tag'>{category.name}</p>
                </article>
              )
            })
          }
        </div>
      </section>

      <section className='explore-section'>
        <img src={RandomMealBackgroundImage} alt="explore-image-home" className='explore-section-img' />
        <div className='explore-section__header'>
          <div className='explore-section__text-container'>
            <p className='text-xl-title'>Still confused about what to eat today?</p>
            <p className='text-medium-body'>Discover a random recipe and get inspired for your next meal.</p>            
          </div>
          <Button variant='primary'>SURPRISE ME!</Button>
        </div>
        
      </section>

      <section className='home-section'>
        <div className='home-section__header'>
          <div className='home-section__text-container'>
            <LuCookingPot size={50} className='home-section__icon' />
            <div className='home-section__inner-text-container'>
              <h2 className='text-large-title'>Browse by Main Ingredient</h2>
              <p className='text-medium-body'>Find recipes using your favorite ingredients.</p>
            </div>
          </div>
          <a href="/explore?type=ingredient" className='text-medium-body home-section__link'>View All Ingredients <LuChevronRight /></a>
        </div>
        <div className='home-section__body'>
          {isLoading && <p>Loading...</p>}
          {
            browserableIngredient.map((ingredient) => {
              return (
                <article className='card' key={ingredient.name} onClick={() => navigate(`/home/results?type=ingredient&q=${ingredient.name}`)}>
                    <img src={ingredient.img} alt={ingredient.name} className='card__img' />
                    <p className='text-base-body tag card-tag'>{ingredient.name}</p>
                </article>
              )
            })
          }
        </div>
      </section>
    
      <section className='home-section'>
        <div className='home-section__header'>
          <div className='home-section__text-container'>
            <LuGlobe size={50} className='home-section__icon' />
            <div className='home-section__inner-text-container'>
              <h2 className='text-large-title'>Browse by Cuisine (Area)</h2>
              <p className='text-medium-body'>Explore recipes from cuisines around the world.</p>
            </div>
          </div>
          <a href="/explore?type=area" className='text-medium-body home-section__link'>View All Cuisines <LuChevronRight /></a>
        </div>
        <div className='home-section__body'>
          {
            landmarks.map((landmark) => {
              return (
                <article className='card' key={landmark.name} onClick={() => navigate(`/home/results?type=country&q=${landmark.country}`)}>
                    <img src={landmark.img} alt={landmark.name} className='card__img' />
                    <p className='text-base-body tag card-tag'>{landmark.country}</p>
                </article>
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
          <Button variant='primary' onClick={() => navigate('/explore')}>EXPLORE ALL RECIPES <LuChevronRight /></Button>
        </div>
        
      </section>

    </article>
  )
}

export default Home
