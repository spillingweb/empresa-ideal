import type React from "react";
import styles from "./Pagination.module.css";
import useWindowWidth from "../../hooks/useWindowWidth.js";

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
    const { windowWidth } = useWindowWidth();

    return (
        <div className={styles.pagination}>
            {windowWidth > 640 && (
                <span>
                    Mostrando {meta.from} a {meta.to} de {meta.total} resultados
                </span>
            )}
            {meta.links.map((link, index) => {
                if (
                    windowWidth < 640 &&
                    index !== 0 &&
                    index !== meta.links.length - 1
                ) {
                    return null;
                }

                return (
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
                );
            })}
        </div>
    );
};

export default Pagination;
