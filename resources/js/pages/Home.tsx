import AppLayout from "../layout/AppLayout.js";
import { Head } from "@inertiajs/react";
import Photo from "../../../public/home.jpg";
import styles from "./Home.module.css";
import LogoBrand from "../components/LogoBrand.js";

const Home = () => {
    return (
        <AppLayout>
            <Head title="Empresa Ideal" />
            <img src={Photo} alt="Home" className={styles.image} />
            <div className={styles.textOverlay}>
                <h1>Tu deseo</h1>
                <h1>Nuestra misión</h1>
            </div>
        </AppLayout>
    );
};

export default Home;
