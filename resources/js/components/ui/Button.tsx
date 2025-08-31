import styles from "./Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
    children: React.ReactNode;
};

const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
    let buttonClass = styles.button;

    if (variant === "primary") {
        buttonClass += ` ${styles.primary}`;
    } else {
        buttonClass += ` ${styles.secondary}`;
    }

    return (
        <button className={buttonClass} {...props}>
            {children}
        </button>
    );
};

export default Button;
