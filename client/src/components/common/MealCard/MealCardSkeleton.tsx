import '../../common/Card/Card.css'
import './MealCard.css'

interface MealCardSkeletonProps {
  count?: number
  showContent?: boolean
  showTag?: boolean
}

export function MealCardSkeleton({
  count = 4,
  showContent = true,
  showTag = true
}: MealCardSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <article className='card meal-card-skeleton' key={index}>
          <div className='meal-card-skeleton__img' />

          {showContent ? (
            <div className='card-content'>
              <div className='meal-card-skeleton__line meal-card-skeleton__line--title' />
              <div className='meal-card-skeleton__line meal-card-skeleton__line--text' />
            </div>
          ) : null}

          {showTag ? <div className='meal-card-skeleton__tag' /> : null}
        </article>
      ))}
    </>
  )
}
