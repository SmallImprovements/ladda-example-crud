import { Component, PropTypes } from 'react';
import { forEach, reduce } from 'lodash';
import Input from '../Input';

export function createFormState(fields, initialValues = {}) {
  return reduce(fields, (mem, field) => {
    mem.values[field] = initialValues[field] || '';
    mem.errors[field] = false;
    mem.errorCount[field] = 0;
    mem.dirty[field] = false;
    return mem;
  }, { values: {}, errors: {}, errorCount: { all: 0 }, dirty: {} });
}

export function setFormError(formData, field, err) {
  return {
    ...formData,
    errors: {
      ...formData.errors,
      [field]: err
    },
    errorCount: {
      ...formData.errorCount,
      all: formData.errorCount.all + 1,
      [field]: formData.errorCount[field] + 1
    }
  };
}

const FORM_CONTEXT = {
  form: PropTypes.shape({
    data: PropTypes.object,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
  }).isRequired
};

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.submitCallbacks = [];
  }

  getChildContext() {
    const { data, onChange } = this.props;
    return {
      form: {
        data,
        onChange: (field) => (event) => {
          event.stopPropagation();
          const nextData = {
            ...data,
            values: { ...data.values, [field]: event.target.value },
            dirty: { ...data.dirty, [field]: true },
            errors: { ...data.errors, [field]: false }
          };
          onChange(nextData);
        },
        onSubmit: (cb) => {
          this.submitCallbacks.push(cb);
          return () => {
            const i = this.submitCallbacks.indexOf(cb);
            if (i !== -1) { this.submitCallbacks.splice(i, 1); }
          };
        }
      }
    };
  }

  render() {
    const {
      onSubmit,
      children,
      ...other
    } = this.props;

    const wrappedOnSubmit = (ev) => {
      const res = onSubmit(ev);
      forEach(this.submitCallbacks, (cb) => cb(res));
    };
    return <form onSubmit={ wrappedOnSubmit } { ...other }>{ children }</form>;
  }
}

FormComponent.childContextTypes = FORM_CONTEXT;

export const Form = FormComponent;

export function FormInput(
  { field, type = 'text', autoFocus = false },
  { form: { onChange, data } }
) {
  return (
    <Input
      type={ type }
      name={ field }
      id={ field }
      value={data.values[field]}
      error={data.errors[field]}
      onChange={onChange(field)}
      autoFocus={ autoFocus }/>
  );
}
FormInput.contextTypes = FORM_CONTEXT;

export function FormTextarea(
  { field, ...other },
  { form: { onChange, data } }
) {
  return (
    <textarea
      name={ field }
      id={ field }
      value={ data.values[field] }
      onChange={ onChange(field) }
      { ...other } />
  );
}
FormTextarea.contextTypes = FORM_CONTEXT;

