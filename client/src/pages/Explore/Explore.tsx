import './Explore.css'
import '../Home/Home.css'
import '../Recipes/Recipes.css'
import HeroImage from '../../assets/images/explorePage/explore-page-bg.jpg'
import { LuChevronRight, LuSearch, LuHeart } from 'react-icons/lu'
import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'
import searchingTypes from '../../data/searchingType'
import type { ExploreType } from '../../types/meal.types'
import { useExploreMeals } from '../../hooks/useExploreMeals'
import { useNavigate, useSearchParams } from 'react-router-dom'

function Explore() {
    const [searchParams] = useSearchParams()
    const [chosenType, setChosenType] = useState<ExploreType>('category')
    const [searchValue, setSearchValue] = useState('')
    const [hasSearched, setHasSearched] = useState(false)
    const [filterText, setFilterText] = useState('')    
    const [keyword, setKeyword] = useState('')
    
    const navigate = useNavigate()
    const searchType = searchParams.get('type') || 'category'


    const { listOfType, cardResult, searchMeals } = useExploreMeals(chosenType)

    const handleSelectItem = (itemName: string) => {
        setSearchValue(itemName)
        setHasSearched(true)
        void searchMeals(itemName)
    }

    const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFilterText(event.target.value)
    }

    const filteredItems = ((listOfType[chosenType] as { name: string }[]) ?? []).filter((item) => {
        const query = filterText.trim().toLowerCase()

        if (!query) {
            return true
        }

        return item.name.toLowerCase().includes(query)
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault

        if (!keyword.trim()) return

        navigate(`/explore/results?type=name&q=${keyword}`)
    }

    useEffect(() => {
        setChosenType(searchType as ExploreType)
    }, [searchType])

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
                            <form onSubmit={handleSubmit} onChange={(e) => setKeyword(e.target.value)} className='search-form'>
                                <input type="text" placeholder='Search recipe by name' className='search-input text-medium-body'/>
                                <button type='submit' className='search-button text-base-body'>Search <LuSearch /> </button>
                            </form>
                        </div>          
                    </div>
                </div>
            </section>

            <section className='explore-hub-section'>
                <h2 className='text-large-title text-bold'>How would you like to explore? (Choose One)</h2>
                <div className='type-card-container'>
                    {
                        searchingTypes.map((type) => {
                            return (
                                <article
                                    className={`type-card${chosenType === type.name ? ' type-card--active' : ''}`}
                                    key={type.name}
                                    onClick={() => setChosenType(type.name as ExploreType)}
                                >
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
                <div className='browse-filter-section browse-container'>
                    {
                        searchingTypes
                            .filter((item) => item.name === chosenType)
                            .map((item) => (
                                <h3 key={item.name} className='text-large-body text-bold'>{item.title}</h3>
                            ))
                    } 
                    <div className='horizontal-rule'></div> 

                    <div className='mini-search-container'>
                        <input
                            type="text"
                            value={filterText}
                            onChange={handleFilterChange}
                            className='mini-search-input text-base-body'
                            placeholder={`Search through ${chosenType}`}
                        />
                        
                        <LuSearch className='mini-search-logo' />
                    </div>

                    <div className='browse-filter-list'>
                        {
                            filteredItems.map((item, index) => {
                                return (
                                    <div className='browse-filter-item' key={`${chosenType}-${item.name}-${index}`} onClick={() => handleSelectItem(item.name)}>
                                        <p className='text-base-body'>{item.name}</p>
                                        <LuChevronRight />
                                    </div>                                
                                )
                            })  
                        }
                    </div>                  
                </div>

                <div className='browse-result-section browse-container'>
                    {!hasSearched ? (
                        <div className='inner-browse-result-section'>
                            <p className='text-large-body text-bold'>Search for a {chosenType}</p>
                            <p className='text-medium-body'>
                                Type {chosenType} name to find and explore <br />
                                delicious recipes from around the world.
                            </p>
                        </div>
                    ) : cardResult.length === 0 ? (
                        <div className='inner-browse-result-section'>
                            <p className='text-large-body text-bold'>No recipe found.</p>
                            <p className='text-medium-body'>
                                We couldn't find any recipes for {searchValue} recipes. <br />
                                Try another {chosenType}.
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className='meal-result-section__title-container'>
                                <p className='text-large-body text-bold'>Review {searchValue} Recipes</p>
                                <div className='all-recipes-link'>
                                    <p className='text-medium-body text-bold' onClick={() => navigate(`/explore/results?type=${chosenType}&q=${searchValue}`)}>See all recipes</p>
                                    <LuChevronRight />
                                </div>                        
                            </div>

                            {cardResult.map((meal) => (
                                <article className='card' key={meal.id} onClick={() => console.log(meal.title)}>
                                    <img src={meal.img} alt={meal.title} className='card__img' />
                                    <div className='card-content'>
                                        <p className='text-medium-body text-bold'>{meal.title}</p>
                                        <p className='text-base-body'>{meal.country}</p>
                                    </div>
                                    <LuHeart
                                        size={30}
                                        className='favorite-logo'
                                        onClick={(event) => {
                                            event.stopPropagation()
                                            navigate('/')
                                        }}
                                    />
                                </article>
                            ))}
                        </>
                    )}
                </div>
            </section>
        </article>
    )
}

export default Explore