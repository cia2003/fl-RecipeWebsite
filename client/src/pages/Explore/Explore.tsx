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
        <main className='explore-page' role='main'>
            <section className='hero-section' aria-labelledby='explore-page-title'>
                <img src={HeroImage} alt='' aria-hidden='true' className='hero-img' />
                <div className='hero-content'>
                    <div className='hero-inner-content'>
                        <h1 id='explore-page-title' className='text-2xl-title'>
                            Explore Recipes
                        </h1>
                        <p className='text-large-body'>
                            Lookup for your favorite meals <br />
                            by seeing through category, cuisine, and main ingredient
                        </p>
                        <div className='search-form-container'>
                            <form onSubmit={handleSubmit} className='search-form' role='search'>
                                <label htmlFor='recipe-search' className='sr-only'>Search recipes</label>
                                <input
                                    id='recipe-search'
                                    type='text'
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    placeholder='Search recipe by name'
                                    className='search-input text-medium-body'
                                />
                                <button type='submit' className='search-button text-base-body' aria-label='Search recipes'>Search <LuSearch /> </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className='explore-hub-section' aria-labelledby='explore-type-heading'>
                <h2 id='explore-type-heading' className='text-large-title text-bold'>How would you like to explore? (Choose One)</h2>
                <div className='type-card-container'>
                    {
                        searchingTypes.map((type) => {
                            const isActive = chosenType === type.name

                            return (
                                <button
                                    type='button'
                                    className={`type-card${isActive ? ' type-card--active' : ''}`}
                                    key={type.name}
                                    onClick={() => setChosenType(type.name as ExploreType)}
                                    aria-pressed={isActive}
                                >
                                    <div className='type-card__title-container'>
                                        <type.icon size={24} className={`type-card__icon type-card__icon--${type.color}`} />
                                        <h3 className='text-large-body text-bold'>{type.title}</h3>
                                    </div>

                                    <p className='text-base-body'>
                                        {type.description}
                                    </p>
                                </button>
                            )
                        })
                    }
                </div>
            </section>

            <section className='explore-hub-section browse-section' aria-labelledby='browse-filter-heading'>
                <div className='browse-filter-section browse-container'>
                    {
                        searchingTypes
                            .filter((item) => item.name === chosenType)
                            .map((item) => (
                                <h3 id='browse-filter-heading' key={item.name} className='text-large-body text-bold'>{item.title}</h3>
                            ))
                    }
                    <div className='horizontal-rule'></div>

                    <div className='mini-search-container'>
                        <label htmlFor='filter-search' className='sr-only'>Filter {chosenType}</label>
                        <input
                            id='filter-search'
                            type='text'
                            value={filterText}
                            onChange={handleFilterChange}
                            className='mini-search-input text-base-body'
                            placeholder={`Search through ${chosenType}`}
                        />

                        <LuSearch className='mini-search-logo' />
                    </div>

                    <div className='browse-filter-list' role='list' aria-label={`Available ${chosenType} options`}>
                        {
                            filteredItems.map((item, index) => {
                                return (
                                    <button
                                        type='button'
                                        className='browse-filter-item'
                                        key={`${chosenType}-${item.name}-${index}`}
                                        onClick={() => handleSelectItem(item.name)}
                                        aria-label={`Select ${item.name}`}
                                    >
                                        <span className='text-base-body'>{item.name}</span>
                                        <LuChevronRight />
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='browse-result-section browse-container' aria-live='polite'>
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
                                <h3 className='text-large-body text-bold'>Review {searchValue} Recipes</h3>
                                <a
                                    className='text-medium-body text-bold all-recipes-link'
                                    href={`/explore/results?t=${chosenType}&q=${searchValue}`}
                                    aria-label={`See all ${searchValue} recipes for ${chosenType}`}
                                >
                                    See all recipes
                                    <LuChevronRight />
                                </a>
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
        </main>
    )
}

export default Explore