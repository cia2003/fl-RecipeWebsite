import { useNavigate } from "react-router-dom"
import type { CategoryCard } from "../../../types/meal.types"

interface CategoryGridProps {
    data: CategoryCard[], 
    navigation: string
}

function CategoryGrid({ data, navigation }: CategoryGridProps) { 
    const navigate = useNavigate() 

    return (
        <div className='inner-browse-body-container'>
            {
                data?.map((item) => {
                return (
                    <article className='card' onClick={() => navigate(navigation)}>
                        <img src={item.img} alt={item.name} className='card__img' />
                        <p className='text-base-body tag card-tag'>{item.name}</p>
                    </article>
                )
                })
            }                                
        </div>
    )
}

export default CategoryGrid