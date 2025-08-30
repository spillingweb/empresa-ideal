import styles from './Button.module.css';

const Button = ({children}: {children: React.ReactNode}) => {
  return (
    <button>{children}</button>
  )
};

export default Button;
