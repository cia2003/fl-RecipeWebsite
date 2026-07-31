import { LuArrowRight } from 'react-icons/lu'

type Recipe = {
    name: string
    total: string
}

type AlphabetGroup = {
    alphabet: string
    totalMeals: Recipe[]
}

type AlphabetListProps = {
    data: AlphabetGroup[]
}

function AlphabetList({ data }: AlphabetListProps) {
    return (
        <div className='inner-browse-body-container cuisine-container ingredient-container'>
            {
                data?.map((item) => {
                    return (
                        <div className='detail-alphabet-list' key={item.alphabet}>
                            <span className='detail-alphabet-item text-medium-body text-bold'>{item.alphabet}</span>
                            <div className='type-item-list'>
                                {
                                    item.totalMeals?.map((recipe) => {
                                        return (
                                            <div className='type-item-container' key={recipe.name}>
                                                <p className='text-medium-body text-bold type-item__title-text'>{recipe.name}</p>
                                                <span className='text-medium-body'>{recipe.total}</span>
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
  
                                        
        </div>
    )
}

export default AlphabetList