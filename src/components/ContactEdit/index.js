import { Component } from 'react';
import { withRouter } from 'react-router';
import { flow } from 'lodash';
import withResolve from 'hocs/withResolve';
import api from 'api';
import { NarrowPage, Card } from 'components/Layout';
import ContactEditForm from 'components/ContactEditForm';

function ContactEdit({ contact, router }) {
  const goToList = () => router.push('/');

  const onSave = (updatedContact) => {
    return api.contacts.updateContact({
      ...contact,
      ...updatedContact
    }).then(goToList);
  };

  const onRemove = () => api.contacts.deleteContact().then(goToList);

  return (
    <NarrowPage>
      <h2>Edit Contact</h2>
      <ContactEditForm
        contact={ contact }
        onSave={ onSave }
        onRemove={ onRemove }
        onCancel={ goToList }
      />
    </NarrowPage>
  );
}

export default flow(withRouter, withResolve({
  resolve: {
    contact: ({ params }) => api.contacts.getContact(params.id)
  }
}))(ContactEdit);
