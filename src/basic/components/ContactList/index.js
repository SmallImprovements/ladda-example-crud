import { Link } from 'react-router';
import { flow, map } from 'lodash';
import { Card } from 'basic/components/Layout';
import Avatar from 'basic/components/ui/Avatar';
import withResolve from 'basic/hocs/withResolve';
import withOwnerId from 'basic/hocs/withOwnerId';

import api from 'basic/api';

import styles from './styles.scss';

function ContactList({ contacts }) {
  return (
    <div>
      { map(contacts, (contact) => (
        <Link key={ contact.id } to={ `basic/edit/${contact.id}` } >
          <Contact key={ contact.id } contact={ contact } />
        </Link>
      ))}
    </div>
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