import styles from './LogoBrand.module.css';
import Logo from '../../../public/logo.png';

const LogoBrand = () => {
  return (
    <div className={styles.logoBrand}>
      <img src={Logo} alt="Logo Empresa Ideal" className={styles.logo} />
    </div>
  )
};

export default LogoBrand;
