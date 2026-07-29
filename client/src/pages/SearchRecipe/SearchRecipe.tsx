import './SearchRecipe.css'
import { LuChevronDown } from 'react-icons/lu'

function SearchRecipe() {
    return (
        <article>
            <div></div>
            <section className="search-recipe-section search-recipe-header">
                <div className="section-header intro-header">
                    <div className='intro-content'>
                        <p className="text-large-body">Search result for</p>
                        <h1 className="text-3xl-title">Category</h1>                        
                    </div>

                </div>
                <div className='search-form-container'>
                    <form action="POST">
                        <input type="text" />
                    </form>
                </div>
            </section>

            <section className="search-recipe-section">
                <div className='search-recipe__filter-container'>
                    <h2 className='text-large-body'>Filter by</h2>
                    <div>
                        <div className='search-recipe__dropdown-menu'>
                            Category <LuChevronDown/>
                        </div>
                        <div className='search-recipe__checkbox'>
                            
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className=''>

                </div>
            </section>

            <section className="search-recipe-section">

            </section>
        </article>
    )
}

export default SearchRecipe