import styles from './Heading.module.css';

const Heading = ({ children }: { children: React.ReactNode }) => {
    return <h1 className={styles.heading}>{children}</h1>;
};

export default Heading;
