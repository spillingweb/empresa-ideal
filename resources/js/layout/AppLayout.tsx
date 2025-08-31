import LogoBrand from "../components/LogoBrand.js";
import Nav from "../components/Nav.js";
import styles from "./AppLayout.module.css";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.appLayout}>
            <header className={styles.header}>
                <LogoBrand />
                <Nav />
            </header>
            <main className={styles.mainContainer}>{children}</main>
            <footer className={styles.footer}>
                <p className={styles.footerText}>
                    &copy; 2025{" "}
                    <a href="https://spillingweb.com" target="_blank">
                        SpillingWeb
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default AppLayout;
