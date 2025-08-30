import styles from './Input.module.css';

const Input = ({...props}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input className={styles.input} {...props} />
  )
};

export default Input;
