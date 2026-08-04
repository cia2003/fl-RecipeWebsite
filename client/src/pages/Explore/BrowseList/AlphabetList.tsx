import { LuArrowRight, LuChevronDown } from 'react-icons/lu'
import type { AlphabetListProps } from '../../../types/meal.types'

function AlphabetList({ data, onLoadMore, hasMore, isLoading }: AlphabetListProps) {
    return (
        <div className='inner-browse-body-container cuisine-container ingredient-container'>
            {
                data?.map((item) => {
                    return (
                        <div className='detail-alphabet-list'>
                            <span className='detail-alphabet-item text-medium-body text-bold'>{item.alphabet}</span>
                            <div className='type-item-list'>
                                {
                                    item.recipes?.map((recipe) => {
                                        return (
                                            <div className='type-item-container' onClick={() => console.log(`Clicked on ${recipe.name}`)}>
                                                <p className='text-medium-body text-bold type-item__title-text'>{recipe.name}</p>
                                                <span className='text-base-body text-gray'>{recipe.total} Recipes</span>
                                                <span><LuArrowRight /></span>
                                            </div>                                             
                                        )
                                    })
                                }
                              
                            </div>
                        </div>                          
                    )
                })
            }

            {hasMore ? (
                <button type='button' className='text-medium-body load-more-button' onClick={onLoadMore} disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Load More'} <LuChevronDown />
                </button>
            ) : (
                <p className='text-base-body text-gray'>No more items to load.</p>
            )}
        </div>
    )
}

export default AlphabetList