import styles from './Button.module.css'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'success'
  size?: 'base' | 'medium' | 'large'
}

const Button = ({ children, onClick, variant='primary', size='large' }: ButtonProps) => (
  <button className={`${styles.button} text-${size}-body`} data-variant={variant} onClick={onClick}>
    {children}
  </button>
)

export default Button
