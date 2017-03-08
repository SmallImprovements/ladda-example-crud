import { Component } from 'react';
import { Page, Card } from 'components/Layout';
import { Form, FormInput, createFormState } from 'components/ui/Form';
import Avatar from 'components/ui/Avatar';
import LoadingButton from 'components/ui/LoadingButton';

import styles from './styles.scss';

class ContactEditForm extends Component {
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
    return this.props.onSave(this.state.form.values);
  }

  goToList() {
    this.props.router.push('/');
  }

  render() {
    const { contact, onCancel } = this.props;

    const formProps = {
      data: this.state.form,
      onChange: this.onFormChange,
      onSubmit: this.onSubmit
    };

    return (
      <Card className={ styles.contact }>
        <Avatar
          className={ styles.avatar }
          src={ contact.avatar }
          size="50"
        />
        <div className={ styles.details } >
          <Form { ...formProps }>
            <label>Name</label>
            <FormInput field="name" />
            <label>Email</label>
            <FormInput field="email" type="email" />

            <div className={ styles.actions }>
              <button
                className="button"
                type="button"
                onClick={ onCancel }>
                Cancel
              </button>
              <LoadingButton className="button save" type="submit">
                Save
              </LoadingButton>
            </div>
          </Form>
        </div>
      </Card>
    );
  }
}

export default ContactEditForm;