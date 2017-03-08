import { Component } from 'react';
import { Link } from 'react-router';
import withResolve from 'hocs/withResolve'
import api from 'api';
import { Page, Card } from 'components/Layout';
import { Form, FormInput, createFormState } from 'components/ui/Form';
import Avatar from 'components/ui/Avatar';

import styles from './styles.scss';

class ContactEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: createFormState(['name', 'email'], {
        name: props.contact.name,
        email: props.contact.email
      })
    };
  }

  onFormChange(form) {
    this.setState({ form });
  }

  render() {
    const { contact } = this.props;
    
    return (
      <Page>
        <h2>Edit Contact</h2>
        <Card className={ styles.contact }>
          <Avatar className={ styles.avatar } src={ contact.avatar } size="50" />
          <div className={ styles.details } >
            <Form data={ this.state.form } onChange={ this.onFormChange }>
              <label>Name</label>
              <FormInput field="name" />
              <label>Email</label>
              <FormInput field="email" type="email" />
            </Form>
            <div className={ styles.actions }>
              <Link to="">
                <button type="button">Cancel</button>
                </Link>
            </div>
          </div>
        </Card>
      </Page>
    );
  }
}

export default withResolve({
  resolve: {
    contact: ({ params }) => api.contacts.getContact(params.id)
  }
})(ContactEdit);