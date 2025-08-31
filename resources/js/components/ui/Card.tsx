import styles from "./Card.module.css";

const Card = ({
    className,
    children,
}: {
    className?: string | undefined;
    children: React.ReactNode;
}) => {
    let classes = styles.card;

    if (className) {
        classes += ` ${className}`;
    }

    return <div className={classes}>{children}</div>;
};

export default Card;
