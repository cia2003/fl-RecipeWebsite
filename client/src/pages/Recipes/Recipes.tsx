import '../Recipes/Recipes.css'
import '../Explore/Explore.css'
import '../Home/Home.css'
import HeroImage from '../../assets/images/explorePage/explore-page-bg.jpg'
import NotFoundRecipe from '../../assets/images/not-found-img.png' 
import { LuChevronLeft, LuChevronRight, LuCheck, LuSearch } from 'react-icons/lu'
import { useRecipes } from '../../hooks/useRecipes'
import Button from '../../components/common/Button/Button'
import { MealCard } from '../../components/common/MealCard/MealCard'
import { MealCardSkeleton } from '../../components/common/MealCard/MealCardSkeleton'

function Recipes() {
    const {
        recipes,
        loading,
        hasNext,
        totalPage,
        page,
        setPage,
        keyword,
        setKeyword,
        handleSubmit,
        navigate,
        searchType,
        query,
        origin
    } = useRecipes()

    return (
        <main className='recipes-page' role='main'>
            <section className='hero-section' aria-labelledby='recipes-page-title'>
                <img src={HeroImage} alt='' aria-hidden='true' className='hero-img' />
                <div className='hero-content'>
                    <div className='hero-inner-content'>
                        {/** Breadcrumbs: show origin (home/explore) then the query or search type */}
                        <div className='text-base-body'>
                            {
                                recipes.length === 0
                                    ? ''
                                    : <div>
                                        <a href={`/${origin}`} className='breadcrumbs-link'>
                                        {origin
                                            ? origin.charAt(0).toUpperCase() + origin.slice(1)
                                            : 'Direct'}                                
                                        </a>

                                        <span>
                                        {' > '}
                                        </span>

                                        <a href={`/${origin}/results?type=$q=${query}`} className='breadcrumbs-link'>
                                            {query || searchType || 'all'}
                                        </a>
                                    </div>
                            }

                            
                        </div>
                        <h1 id='recipes-page-title' className='text-2xl-title'>
                            {
                            recipes.length === 0
                                ? "Not Found Any"
                                : query} Recipes
                        </h1>
                        <div className='search-form-container' id='search-form'>
                            <form onSubmit={handleSubmit} className='search-form' role='search'>
                                <label htmlFor='recipes-search' className='sr-only'>Search recipes</label>
                                <input
                                    id='recipes-search'
                                    type="text"
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

            <section className='recipes-section' aria-labelledby='recipes-results-heading'>
                <h2 id='recipes-results-heading' className={`text-medium-body text-gray ${recipes.length === 0 ? 'hide-element' : ''}`}>{loading ? 'Loading...' : `${recipes.length} Recipe(s) Found`}</h2>
                <div className='recipes-result-container' role='list' aria-label='Recipe results'>
                    {
                    
                    recipes.length === 0 && !loading
                        ?   <div className='not-found-recipe-container'>
                                <img src={NotFoundRecipe} alt="not-found-recipe-image" className='not-found-recipe-container__img' />
                                <div className='not-found-recipe-container__text-container'>
                                    <h3 className='text-large-title'>No Recipe Found</h3>
                                    <p className='text-medium-body'>We couldn't find any recipes matching <span className='text--color-red'>"{query}"</span></p>                                    
                                </div>
                                <div className='not-found-recipe-container__list'>
                                    <h3 className='text-medium-title'>Try:</h3>
                                    <div className='not-found-recipe-container__item'>
                                        <LuCheck className='not-found-recipe__icon' />
                                        <p className='text-base-body'>Check your spelling</p>
                                    </div>
                                    <div className='not-found-recipe-container__item'>
                                        <LuCheck className='not-found-recipe__icon' />
                                        <p className='text-base-body'>Search another ingredient</p>
                                    </div>
                                    <div className='not-found-recipe-container__item'>
                                        <LuCheck className='not-found-recipe__icon' />
                                        <p className='text-base-body'>Browse categories</p>
                                    </div>
                                </div>
                                <div className='not-found-recipe-container__button-container'>
                                    <Button variant='primary' onClick={() => navigate('/explore')}>Explore Recipes</Button>
                                </div>

                            </div>
                        : loading ? (
                            <MealCardSkeleton count={8} />
                          ) : (
                            recipes.map((r) => (
                                <MealCard
                                    key={r.id}
                                    img={r.img}
                                    alt={r.title}
                                    title={r.title}
                                    country={r.country}
                                    onClick={() => {
                                        if (r.id) navigate(`/detail-recipe?id=${r.id}`)
                                    }}
                                />
                            ))
                          )}
                </div>
                <div className={`page-container ${recipes.length === 0 ? 'hide-element' : '' }`}>
                    <button
                        type='button'
                        className={`page-icon ${page === 1 ? 'disabled' : ''}`}
                        onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                        aria-label='Go to previous page'
                        disabled={page === 1}
                    >
                        <LuChevronLeft size={25} />
                    </button>
                    <p className='text-base-body'>
                        <span className='text-bold'>{page}</span> of {totalPage}
                    </p>
                    <button
                        type='button'
                        className={`page-icon ${!hasNext ? 'disabled' : ''}`}
                        onClick={() => {
                            if (hasNext) setPage((prev) => prev + 1)
                        }}
                        aria-label='Go to next page'
                        disabled={!hasNext}
                    >
                        <LuChevronRight size={25} />
                    </button>
                </div>
            </section>
        </main>
    )
}

export default Recipes