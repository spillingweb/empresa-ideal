import styles from "./LogoBrand.module.css";
import Logo from "../../../public/logo.png";

const LogoBrand = () => {
    return <img className={styles.logo} src={Logo} alt="Logo Empresa Ideal" />;
};

export default LogoBrand;
