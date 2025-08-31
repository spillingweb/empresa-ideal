import AppLayout from "../layout/AppLayout.js";
import { Head } from "@inertiajs/react";
import Photo from "../../../public/home.jpg";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <AppLayout>
            <Head title="Empresa Ideal" />
            <img src={Photo} alt="Home" className={styles.image} />
        </AppLayout>
    );
};

export default Home;
