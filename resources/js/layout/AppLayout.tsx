import { router, usePage } from "@inertiajs/react";
import LogoBrand from "../components/LogoBrand.js";
import Nav from "../components/Nav.js";
import FlashMessage from "../components/ui/FlashMessage.js";
import styles from "./AppLayout.module.css";
import type { Flash } from "../types/index.js";
import { route } from "ziggy-js";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const { flash } = usePage<Flash>().props;

    return (
        <div className={styles.appLayout}>
            <FlashMessage message={flash} />
            <header className={styles.header}>
                <LogoBrand onClick={() => router.visit(route("home"))} />
                <Nav />
            </header>
            <main className={styles.mainContainer}>{children}</main>
            <footer className={styles.footer}>
                <p>
                    &copy; 2025{" "}
                    <a className={styles.footerLink} href="https://spillingweb.com" target="_blank">
                        SpillingWeb
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default AppLayout;
