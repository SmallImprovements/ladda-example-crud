import { Link } from 'react-router';
import styles from './styles.scss';

export default function Nav() {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <Link className={styles.title} to="">
          Ladda Cache CRUD Example
        </Link>
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
}
