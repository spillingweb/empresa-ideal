import Footer from "../components/Footer.js";
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
            <Footer />
        </div>
    );
};

export default AppLayout;
