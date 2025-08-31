import styles from "./Heading.module.css";

const Heading = ({
    level = 2,
    children,
}: {
    level?: 1 | 2 | 3;
    children: React.ReactNode;
}) => {
    if (level === 1) return <h1>{children}</h1>;
    if (level === 2) return <h2>{children}</h2>;
    if (level === 3) return <h3>{children}</h3>;
};

export default Heading;
