import { Link } from 'react-router';
import { flow, map } from 'lodash';
import { Page, Card } from 'components/Layout';
import Avatar from 'components/ui/Avatar';
import withResolve from 'hocs/withResolve';
import withOwnerId from 'hocs/withOwnerId';

import styles from './styles.scss';

import api from 'api';

function ContactList({ contacts }) {
  return (
    <Page>
      <h2>Contact List</h2>
      <div>
        { map(contacts, (contact) => (
          <Link key={ contact.id } to={ `edit/${contact.id}` } >
            <Contact key={ contact.id } contact={ contact } />
          </Link>
        ))}
      </div>
   </Page>
 );
}

function Contact({ contact }) {
  return (
    <Card className={ styles.contact }>
      <Avatar src={ contact.avatar } size="50" />
      <div className={ styles.details }>
        <div className={ styles.name }>{ contact.name }</div>
        <div className={ styles.email }>{ contact.email }</div>
      </div>
    </Card>
  );
}

export default flow(withResolve({
  resolve: {
    contacts: ({ ownerId }) => api.contacts.getContacts(ownerId)
  }
}), withOwnerId)(ContactList);