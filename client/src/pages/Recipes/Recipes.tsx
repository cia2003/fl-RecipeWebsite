import '../Recipes/Recipes.css'
import '../Explore/Explore.css'
import HeroImage from '../../assets/images/explorePage/explore-page-bg.jpg'
import NotFoundRecipe from '../../assets/images/not-found-img.png'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { LuHeart, LuChevronLeft, LuChevronRight, LuCheck, LuSearch } from 'react-icons/lu'
import useRecipesMeals from '../../hooks/useRecipesMeals'
import { useEffect, useState } from 'react'
import Button from '../../components/common/Button/Button'

function Recipes() {
    const navigate = useNavigate()
    const { origin } = useParams()
    const [searchParams] = useSearchParams()
    const [page, setPage] = useState(1)
    const [keyword, setKeyword] = useState('')

    const searchType = searchParams.get('type') || ''
    const query = searchParams.get('q') || ''
    const { recipes, loading, hasNext, totalPage } = useRecipesMeals(searchType, query, origin, page)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault

        if (!keyword.trim()) return

        // navigate(`/explore/results?type=name&q=${keyword}`)
        console.log(`/${origin}/results?type=name&q=${keyword}`)
    }

    useEffect(() => {
        setPage(1)
    }, [searchType, query, origin])

    return (
        <article className='recipes-page'>
            <section className='hero-section'>
                <img src={HeroImage} alt="hero-image-page" className='hero-img' />
                <div className='hero-content'>
                    <div className='hero-inner-content'>
                        {/** Breadcrumbs: show origin (home/explore) then the query or search type */}
                        <div className='text-base-body'>
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
                        <h1 className='text-2xl-title'>
                            {query || "Not Found Any"} Recipes
                        </h1>
                        <div className='search-form-container' id='search-form'>
                            <form onSubmit={handleSubmit} onChange={(e) => setKeyword(e.target.value)} className='search-form'>
                                <input type="text" placeholder='Search recipe by name' className='search-input text-medium-body'/>
                                <button type='submit' className='search-button text-base-body'>Search <LuSearch /> </button>
                            </form>
                        </div> 
                    </div>
                </div>
            </section>

            <section className='recipes-section'>
                <h2 className={`text-medium-body text-gray ${recipes.length === 0 ? 'hide-element' : ''}`}>{loading ? 'Loading...' : `${recipes.length} Recipe(s) Found`}</h2>
                <div className='recipes-result-container'>
                    {
                    
                    recipes.length === 0
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
                        :   recipes.map((r) => (
                            <article
                                key={r.id}
                                className='card'
                                onClick={() => {
                                    // navigate to detail page — adapt path to your routes
                                    if (r.id) navigate(`/detail/${r.id}`)
                                }}
                            >
                                <img src={r.img} className='card__img' />
                                <div className='card-content'>
                                    <p className='text-medium-body text-bold'>{r.title}</p>
                                    <p className='text-base-body'>{r.country}</p>
                                </div>
                                <LuHeart
                                    size={30}
                                    className='favorite-logo'
                                    onClick={(event) => {
                                        event.stopPropagation()
                                        // add favorite handling
                                    }}
                                />
                            </article>
                        ))}
                </div>
                <div className={`page-container ${recipes.length === 0 ? 'hide-element' : '' }`}>
                    <LuChevronLeft
                        className={`page-icon ${page === 1 ? 'disabled' : ''}`}
                        onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                        size={25}
                    />
                    <p className='text-base-body'>
                        <span className='text-bold'>{page}</span> of {totalPage}
                    </p>
                    <LuChevronRight
                        className={`page-icon ${!hasNext ? '' : ''}`}
                        onClick={() => {
                            if (hasNext) setPage((prev) => prev + 1)
                        }}
                        size={25}
                    />
                </div>
            </section>
        </article>
    )
}

export default Recipes