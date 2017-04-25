import { flow } from 'lodash';
import { withRouter } from 'react-router';
import withResolve from 'basic/hocs/withResolve';
import withOwnerId from 'basic/hocs/withOwnerId';
import api from 'basic/api';
import { NarrowPage, Card } from 'basic/components/Layout';
import ContactEditForm from 'basic/components/ContactEditForm';

const NEW_CONTACT = {
  name: '',
  email: '',
  avatar: '/avatars/avatar-anonymous.svg'
};

function ContactCreate({ router, ownerId }) {
  const goToList = () => router.push('/basic');

  const onSave = (updatedContact) => {
    return api.contacts.createContact({
      ...NEW_CONTACT,
      ...updatedContact,
      ownerId
    }).then(goToList);
  };

  return (
    <NarrowPage>
      <h2>Add Contact</h2>
      <ContactEditForm
        contact={ NEW_CONTACT }
        onSave={ onSave }
        onCancel={ goToList }
      />
    </NarrowPage>
  );
}

export default flow(withRouter, withOwnerId)(ContactCreate);
