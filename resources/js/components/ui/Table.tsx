import styles from "./Table.module.css";

const Table = ({ children }: { children: React.ReactNode }) => {
    return <table className={styles.table}>{children}</table>;
};

export default Table;
