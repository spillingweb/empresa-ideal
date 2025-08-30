import { Link } from "@inertiajs/react";
import styles from "./Nav.module.css";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li>
                    <Link href="/">Inicio</Link>
                </li>
                <li>
                    <Link href="/clientes">Clientes</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
