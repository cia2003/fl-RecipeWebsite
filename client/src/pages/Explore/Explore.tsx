import './Explore.css'
import '../Home/Home.css'
import '../Recipes/Recipes.css'
// import HeroImage from '../../assets/images/hero-section-home.jpg'
import HeroImage from '../../assets/images/explorePage/explore-page-bg.jpg'
import { LuSearch } from 'react-icons/lu'
import { useState } from 'react'
import searchingTypes from '../../data/searchingType'
import { useNavigate } from 'react-router-dom'


import landmarks from '../../data/landmark'

import CategoryGrid from './BrowseList/CategoryGrid'
import AlphabetList from './BrowseList/AlphabetList'
import { useExploreMeals } from '../../hooks/useExploreMeals'




function Explore() {
    const { allBrowserableCategory, groupedAlphabet } = useExploreMeals()
    const [chosenType, setChosenType] = useState('category')

    const alphabets = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
    );
    const navigate = useNavigate()

    return (
        <article className='explore-page'>
            <section className='hero-section'>
                <img src={HeroImage} alt="hero-image-page" className='hero-img' />
                <div className='hero-content'>
                    <div className='hero-inner-content'>
                        <h1 className='text-2xl-title'>
                            Explore Recipes
                        </h1>
                        <p className='text-large-body'>
                            Lookup for your favorite meals <br />
                            by seeing through category, cuisine, and main ingredient
                        </p>
                        <div className='search-form-container'>
                            <form action="" className='search-form'>
                                <input type="text" placeholder='Search recipe by name' className='search-input text-medium-body'/>
                                <button type='submit' className='search-button text-base-body'>Search <LuSearch /> </button>
                            </form>
                        </div>            
                    </div>
                </div>
            </section>

            <section className='explore-hub-section'>
                <h2 className='text-large-title text-bold'>How would you like to explore?</h2>
                <div className='type-card-container'>
                    {
                        searchingTypes.map((type) => {
                            return (
                                <article className='type-card'>
                                    <div className='type-card__title-container'>
                                        <type.icon size={24} className={`type-card__icon type-card__icon--${type.color}`} />
                                        <h3 className='text-large-body text-bold'>{type.title}</h3>                                        
                                    </div>

                                    <p className='text-base-body'>
                                        {type.description}
                                    </p>
                                </article>                                
                            )
                        })
                    }

                </div>
            </section>

            <section className='explore-hub-section browse-section'>
                <div className='tab-container'>
                    <div className='tab-list'>
                        {
                            searchingTypes.map((type) => {
                                return (
                                    <div className='text-medium-body text-bold tab-item' key={`search-card-${type.name}`} onClick={() => setChosenType(type.name)}>
                                        <type.icon />
                                        {type.title}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='horizontal-rule'></div>
                    <div className='explore-hub-section__body browse-container'>
                        <div className='browse-header-container'>
                            <div className='browse-header__text-container'>
                                {
                                    searchingTypes.map((type) => {
                                        return (
                                            chosenType === type.name
                                                ? (
                                                    <>
                                                        <h3 className='text-large-title text-bold'>{type.title}</h3>
                                                        <p className='text-medium-body'>{type.altDescription}</p>
                                                    </>
                                                
                                            )
                                                : null
                                        )
                                    }
                                    )
                                }                            
                            </div>
                            <div className='mini-search-container'>
                                <input type="text" placeholder='search category' className='mini-search-input text-medium-body' />
                                <LuSearch size={15} className='mini-search-logo' />
                            </div>
                        </div>

                        {
                            chosenType !== "category"
                                ? <div className='inner-browse-container'>
                                    <div className='type-container'>
                                        <h4 className='text-medium-body text-bold'>Popular Cuisines</h4>
                                        <div className='tag-container'>
                                            {
                                                landmarks.map((landmark) => {
                                                    return (
                                                        <div className='tag popular-tag text-base-body' onClick={() => navigate("/")}><LuSearch /> {landmark.country}</div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>

                                    <div className='type-container'>
                                        <h4 className='text-medium-body text-bold'>All Cuisines</h4>
                                        <div className='alphabet-list'>
                                            {
                                                alphabets.map((letter) => {
                                                    return (
                                                        <div key={letter} className='alphabet-item text-base-body text-bold'>{letter}</div>
                                                    )
                                                    
                                                })
                                            }
                                            <div key="#" className='alphabet-item text-base-body text-bold'>#</div>
                                        </div>
                                    </div>                            
                                 </div>
                                : ''
                        }

                        <div className='browse-body-container'>
                            { 
                                
                                chosenType === "category"
                                    ? <CategoryGrid data={allBrowserableCategory} navigation='/' />
                                    : <AlphabetList data={groupedAlphabet} />
                            }
                        </div>
                    </div>                    
                </div>
            </section>
        </article>
    )
}

export default Explore