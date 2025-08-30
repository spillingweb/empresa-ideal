import AppLayout from "../../layout/AppLayout.js";
import type { Client } from "../../types/index.js";
import styles from "./Edit.module.css";

const Edit = ({ client }: { client: Client }) => {
    return (
        <AppLayout>
            <h1>Edit Client</h1>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <button type="submit">Update</button>
            </form>
        </AppLayout>
    );
};

export default Edit;
