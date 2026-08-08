import './Explore.css'
import '../Home/Home.css'
import '../Recipes/Recipes.css'
import HeroImage from '../../assets/images/explorePage/explore-page-bg.jpg'
import { LuChevronRight, LuSearch } from 'react-icons/lu'
import searchingTypes from '../../data/searchingType'
import type { ExploreType } from '../../types/meal.types'
import { useExplore } from '../../hooks/useExplore'
import { MealCard } from '../../components/common/MealCard/MealCard'
import { MealCardSkeleton } from '../../components/common/MealCard/MealCardSkeleton'

function Explore() {
    const {
        chosenType,
        setChosenType,
        searchValue,
        hasSearched,
        cardResult,
        isLoading,
        filteredItems,
        handleSelectItem,
        handleFilterChange,
        handleSubmit,
        goToDetail,
        keyword,
        setKeyword,
        filterText
    } = useExplore()

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
                            <form onSubmit={handleSubmit} className='search-form'>
                                <input
                                    type="text"
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    placeholder='Search recipe by name'
                                    className='search-input text-medium-body'
                                />
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
                    {!hasSearched 
                    ? (
                        <div className='inner-browse-result-section'>
                            <p className='text-large-body text-bold'>Search for a {chosenType}</p>
                            <p className='text-medium-body'>
                                Type {chosenType} name to find and explore <br />
                                delicious recipes from around the world.
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className='meal-result-section__title-container'>                                 
                                <p className='text-large-body text-bold'>Review {searchValue} Recipes</p>                                 
                                <div className='all-recipes-link'>                                     
                                    <a className='text-medium-body text-bold all-recipes-link' href={`/explore/results?t=${chosenType}&q=${searchValue}`} >See all recipes</a>
                                    <LuChevronRight />                                 
                                </div>                                                     
                            </div>
                        {
                            isLoading 
                                ? <MealCardSkeleton count={6} />
                                : (cardResult.length !== 0
                                    ? cardResult.map((meal) => {
                                        return (
                                            <MealCard
                                                key={meal.id}
                                                img={meal.img}
                                                alt={meal.title}
                                                title={meal.title}
                                                country={meal.country}
                                                onClick={() => goToDetail(meal.id)}
                                            />                                            
                                        )
                                        })
                                    : <div className='inner-browse-result-section'>
                                            <p className='text-large-body text-bold'>No recipe found.</p>
                                            <p className='text-medium-body'>
                                                We couldn't find any recipes for {searchValue} recipes. <br />
                                                Try another {chosenType}.
                                            </p>
                                        </div>
                                )
                        }
                        
                        </>
                    )
                    }
                </div>
            </section>
        </article>
    )
}

export default Explore