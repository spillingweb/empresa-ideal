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
                srcSet={`${PhotoS} 320w, ${PhotoM} 680w, ${PhotoL} 960w`}
                src={PhotoL}
                alt="View from the office"
            />
            <div className={styles.textOverlay}>
                <h1>tu deseo...</h1>
                <h1>...nuestra misión</h1>
            </div>
        </AppLayout>
    );
};

export default Home;
