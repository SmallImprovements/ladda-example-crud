import { Component } from 'react';
import { withRouter } from 'react-router';
import { flow } from 'lodash';
import withResolve from 'hocs/withResolve'
import api from 'api';
import { Page, Card } from 'components/Layout';
import ContactEditForm from 'components/ContactEditForm'

function ContactEdit({ contact, router }) {
  const goToList = () => router.push('/');

  const onSave = (updatedContact) => {
    return api.contacts.updateContact({
      ...contact,
      ...updatedContact
    }).then(goToList);
  };

  return (
    <Page>
      <h2>Edit Contact</h2>
      <ContactEditForm
        contact={ contact }
        onSave={ onSave }
        onCancel={ goToList }
      />
    </Page>
  );
}

export default flow(withRouter, withResolve({
  resolve: {
    contact: ({ params }) => api.contacts.getContact(params.id)
  }
}))(ContactEdit);
