import type { ReactNode } from 'react'
import '../../common/Card/Card.css'
import './MealCard.css'

interface MealCardProps {
  img: string
  alt?: string
  title?: string
  country?: string
  tag?: string
  onClick?: () => void
  className?: string
  children?: ReactNode
}

export function MealCard({
  img,
  alt,
  title,
  country,
  tag,
  onClick,
  className,
  children
}: MealCardProps) {
  const hasContent = Boolean(title || country || children)
  const classNames = ['card', className].filter(Boolean).join(' ')

  return (
    <article className={classNames} onClick={onClick}>
      <img src={img} alt={alt ?? title ?? 'meal-thumbnail'} className='card__img' />

      {hasContent ? (
        <div className='card-content'>
          {children ?? (
            <>
              {title ? <p className='text-medium-body text-bold'>{title}</p> : null}
              {country ? <p className='text-base-body'>{country}</p> : null}
            </>
          )}
        </div>
      ) : null}

      {tag ? <p className='text-base-body tag card-tag'>{tag}</p> : null}
    </article>
  )
}
