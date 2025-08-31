import type React from "react";
import styles from "./Pagination.module.css";

type PaginationProps = {
    meta: {
        from: number;
        to: number;
        total: number;
        links: {
            url: string | null;
            label: string;
            active: boolean;
            page: number;
        }[];
    };
    setPageNumber: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ meta, setPageNumber }: PaginationProps) => {
    return (
        <div className={styles.pagination}>
            {meta.links.map((link) => (
                <button
                    key={link.label}
                    className={`${styles.pageButton} ${
                        link.active ? styles.active : ""
                    }`}
                    disabled={!link.url}
                    onClick={() => link.url && setPageNumber(link.page)}
                >
                    {link.label === "pagination.previous"
                        ? "Anterior"
                        : link.label === "pagination.next"
                        ? "Siguiente"
                        : link.label}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
