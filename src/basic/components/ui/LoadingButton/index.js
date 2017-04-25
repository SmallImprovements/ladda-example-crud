import { Component, PropTypes } from 'react';
import { omit } from 'lodash';
import classNames from 'classnames';

class LoadingButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
    this.submitListener = null;
    this.isUnmounting = false;
    this.stopLoading = this.stopLoading.bind(this);
  }

  stopLoading(res) {
    if (!this.isUnmounting) {
      this.setState({ loading: false });
    }
    return res;
  }

  componentWillMount() {
    const { form } = this.context;
    const { noSubmit } = this.props;
    if (form && !noSubmit) {
      this.submitListener = form.onSubmit((pr) => this.setPromise(pr));
    }
  }

  componentWillUnmount() {
    this.isUnmounting = true;
    if (this.submitListener) {
      this.submitListener();
      this.submitListener = null;
    }
  }

  setPromise(promise) {
    if (typeof promise.then === 'function') {
      promise
        .then(this.stopLoading)
        .catch((err) => {
          this.stopLoading();
          return Promise.reject(err);
        });
      this.setState({ promise, loading: true });
    }
  }

  render() {
    const { onClick, ...otherProps } = this.props;

    const className = classNames(this.props.className, {
      loading: this.state.loading
    });

    const props = {
      ...omit(otherProps, ['noSubmit']),
      className,
      onClick: onClick ? (ev) => this.setPromise(onClick(ev)) : (() => {})
    };

    return (
      <button { ...props } />
    );
  }
}

LoadingButton.contextTypes = {
  form: PropTypes.shape({ onSubmit: PropTypes.func })
};

export default LoadingButton;
