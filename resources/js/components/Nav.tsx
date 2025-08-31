import { Link } from "@inertiajs/react";
import styles from "./Nav.module.css";
import { route } from "ziggy-js";

const Nav = () => {
    const activeTab = route().current();

    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li>
                    <Link
                        href="/"
                        className={activeTab === "home" ? styles.active : ""}
                    >
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link
                        href="/clientes"
                        className={
                            activeTab === "client.list" ? styles.active : ""
                        }
                    >
                        Clientes
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
