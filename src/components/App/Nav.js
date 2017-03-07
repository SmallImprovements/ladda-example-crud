import { createElement } from 'react';
import { filter, flow, map } from 'lodash';
import styles from './Nav.scss';
import NotificationsBar from './NotificationsBar';

export default function Nav() {
  return (
    <div className={styles.navContainer}>
      <NotificationsBar />
      <nav className={styles.nav}>
        <span className={styles.title}>Ladda Cache CRUD Example</span>
      </nav>
    </div>
  );
};
