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

    this.onFormChange = this.onFormChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onFormChange(form) {
    this.setState({ form });
  }

  onSubmit(event) {
    event.stopPropagation();
    event.preventDefault();
    api.contacts.updateContact({
      ...this.props.contact,
      ...this.state.form
    });
  }

  render() {
    const { contact } = this.props;

    const formProps = {
      data: this.state.form,
      onChange: this.onFormChange,
      onSubmit: this.onSubmit
    };
    
    return (
      <Page>
        <h2>Edit Contact</h2>
        <Card className={ styles.contact }>
          <Avatar className={ styles.avatar } src={ contact.avatar } size="50" />
          <div className={ styles.details } >
            <Form { ...formProps }>
              <label>Name</label>
              <FormInput field="name" />
              <label>Email</label>
              <FormInput field="email" type="email" />
              
              <div className={ styles.actions }>
                <Link to="">
                  <button className="button" type="button">Cancel</button>
                </Link>
                <button className="primary-button" type="submit">Save</button>
              </div>
            </Form>
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