import AppLayout from '../../layout/AppLayout.js';
import styles from './Create.module.css';

const Create = () => {
  return (
    <AppLayout>
      <h1>Create Client</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">Create</button>
      </form>
    </AppLayout>
  );
};

export default Create;
