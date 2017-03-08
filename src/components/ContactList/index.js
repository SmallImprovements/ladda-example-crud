import { flow, map } from 'lodash';
import { Card } from 'components/Layout';
import withResolve from 'hocs/withResolve';
import withOwnerId from 'hocs/withOwnerId';

import api from 'api';

function ContactList({ contacts }) {
  return (
    <div>
      { map(contacts, (contact) => (
        <Contact key={ contact.id } contact={ contact } />
      ))}
   </div>
 );
}

function Contact({ contact }) {
  return (
    <Card>
       { contact.name }
    </Card>
  );
}

export default flow(withResolve({
  resolve: {
    contacts: ({ ownerId }) => api.contacts.getContacts(ownerId)
  }
}), withOwnerId)(ContactList);