import { Link } from 'react-router';
import ContactList from 'basic/components/ContactList';
import ActivityList from 'basic/components/ActivityList';
import { Page } from 'basic/components/Layout';

import styles from './styles.scss';

export default function Home() {
  return (
    <Page>
      <div className={ styles.header }>
        <h2>Contact List</h2>
        <div>
          <Link className="button save" to="basic/create">
            ➕ Add Contact
          </Link>
        </div>
      </div>
      <div className={ styles.body }>
        <section>
          <ContactList />
        </section>
        <aside>
          <ActivityList />
        </aside>
      </div>
    </Page>
  );
}
