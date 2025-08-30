import { Head } from '@inertiajs/react';
import AppLayout from '../../layout/AppLayout.js';
import type { Client } from '../../types/index.js';
import styles from './Index.module.css';

const Index = ({clients}: {clients: Client[]}) => {
  return (
    <AppLayout>
      <Head title="Clientes" />
      <h1 className={styles.title}>Clientes</h1>
      <ul className={styles.clientList}>
        {/* {clients.map(client => (
          <li key={client.id} className={styles.clientItem}>
            {client.name}
          </li>
        ))} */}
      </ul>
    </AppLayout>
  )
};

export default Index;
