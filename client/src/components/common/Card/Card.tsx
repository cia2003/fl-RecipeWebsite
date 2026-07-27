import './Card.css'

interface CardProps {
    id: string
    img?: string
    title: string
    children?: React.ReactNode
    onClick?: () => void
    variant?: 'featured-card' | 'small-card'
}

const Card = ({ id, img, title, children, onClick, variant='featured-card' }: CardProps) => (
    <div className='card-container' onClick={onClick} data-variant={variant} id={id}>
        <div className="card-image-container">
            <img src={img} alt={title} className="card-image" />
        </div>
        <div className="card-content">
            <h3 className="text-medium-title">{title}</h3>
            {children}         
        </div>

    </div>
)

export default Card
