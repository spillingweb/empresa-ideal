import { Client } from '../../types';
import styles from '/Index.module.css';

const Index = ({clients}: {clients: Client[]}) => {
  return (
    <>
      <h1 className={styles.title}>Clients</h1>
      <ul className={styles.clientList}>
        {clients.map(client => (
          <li key={client.id} className={styles.clientItem}>
            {client.name}
          </li>
        ))}
      </ul>
    </>
  )
};

export default Index;
