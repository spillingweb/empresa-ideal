import styles from './Form.module.css';

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  children: React.ReactNode;
};

const Form = ({children, ...props}: FormProps) => {
  return (
    <form className={styles.form} {...props}>
      {children}
    </form>
  );
};

export default Form;
