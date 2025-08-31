import styles from "./LogoBrand.module.css";
import Logo from "../../../public/logo.png";

const LogoBrand = ({ onClick }: { onClick?: () => void }) => {
    let classes = styles.logo;

    if (onClick) {
        classes += ` ${styles.clickable}`;
    }

    return (
        <img
            className={classes}
            src={Logo}
            alt="Logo Empresa Ideal"
            onClick={onClick}
        />
    );
};

export default LogoBrand;
