import AppLayout from "../layout/AppLayout.js";
import { Head } from "@inertiajs/react";
import PhotoS from "../../../public/homeS.jpg";
import PhotoM from "../../../public/homeM.jpg";
import PhotoL from "../../../public/homeL.jpg";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <AppLayout>
            <Head title="Empresa Ideal" />
            <img
                className={styles.image}
                srcSet={`${PhotoS} 600w, ${PhotoM} 1800w, ${PhotoL} 2300w`}
                src={PhotoL}
                alt="View from the office"
            />
        </AppLayout>
    );
};

export default Home;
