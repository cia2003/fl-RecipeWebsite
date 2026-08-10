import styles from './Button.module.css'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'success'
  size?: 'base' | 'medium' | 'large'
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ children, onClick, variant='primary', size='large', type='button' }: ButtonProps) => (
  <button className={`${styles.button} text-${size}-body`} data-variant={variant} onClick={onClick} type={type}>
    {children}
  </button>
)

export default Button
