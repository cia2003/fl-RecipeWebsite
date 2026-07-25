import styles from './Button.module.css'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Button = ({ children, onClick, variant='primary' }: ButtonProps) => (
  <button className={`${styles.button} text-large-body`} data-variant={variant} onClick={onClick}>
    {children}
  </button>
)

export default Button
