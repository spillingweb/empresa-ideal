import styles from "./Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "success";
    children: React.ReactNode;
};

const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
    let buttonClass = styles.button;

    if (variant === "primary") buttonClass += ` ${styles.primary}`;
    if (variant === "secondary") buttonClass += ` ${styles.secondary}`;
    if (variant === "success") buttonClass += ` ${styles.success}`;

    return (
        <button className={buttonClass} {...props}>
            {children}
        </button>
    );
};

export default Button;
