import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.footerText}>
                &copy; 2025 <a href="https://spillingweb.com">SpillingWeb</a>
            </p>
        </footer>
    );
};

export default Footer;
