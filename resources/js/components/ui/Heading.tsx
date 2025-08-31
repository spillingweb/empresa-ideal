import styles from "./Heading.module.css";

const Heading = ({
    level = 2,
    bottomMargin,
    children,
}: {
    level?: 1 | 2 | 3;
    bottomMargin?: 'small' | 'medium' | 'large' ;
    children: React.ReactNode;
}) => {
    let className;

    switch (bottomMargin) {
        case 'small':
            className = styles.mbSmall;
            break;
        case 'medium':
            className = styles.mbMedium;
            break;
        case 'large':
            className = styles.mbLarge;
            break;
        default:
            className = undefined;
    }

    if (level === 1) return <h1 className={className}>{children}</h1>;
    if (level === 2) return <h2 className={className}>{children}</h2>;
    if (level === 3) return <h3 className={className}>{children}</h3>;
};

export default Heading;
