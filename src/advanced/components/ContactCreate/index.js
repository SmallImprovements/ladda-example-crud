import { flow } from 'lodash';
import { withRouter } from 'react-router';
import withResolve from 'advanced/hocs/withResolve';
import withOwnerId from 'advanced/hocs/withOwnerId';
import api from 'advanced/api';
import { NarrowPage, Card } from 'advanced/components/Layout';
import ContactEditForm from 'advanced/components/ContactEditForm';

const NEW_CONTACT = {
  name: '',
  email: '',
  avatar: '/avatars/avatar-anonymous.svg'
};

function ContactCreate({ router, ownerId }) {
  const goToList = () => router.push('/advanced');

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
