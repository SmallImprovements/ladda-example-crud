import { createElement } from 'react';
import { filter, flow, map } from 'lodash';
import styles from './Nav.scss';

export default function Nav() {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <span className={styles.title}>Ladda Cache CRUD Example</span>
        <a 
          type="button"
          className="button save"
          target="_blank"
          href="https://github.com/SmallImprovements/ladda-example-crud">
          Check out the source code
        </a>
      </nav>
    </div>
  );
};
