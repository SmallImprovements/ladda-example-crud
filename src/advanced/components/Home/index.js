import { Link } from 'react-router';
import ContactList from 'advanced/components/ContactList';
import ActivityList from 'advanced/components/ActivityList';
import { Page } from 'advanced/components/Layout';

import styles from './styles.scss';

export default function Home() {
  return (
    <Page>
      <div className={ styles.header }>
        <h2>Contact List</h2>
        <div>
          <Link className="button save" to="advanced/create">
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
