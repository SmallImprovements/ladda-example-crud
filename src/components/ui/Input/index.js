import { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { isBoolean, debounce as debounceFn } from 'lodash';
import styles from './styles.scss';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.generateDebouncedHandler(props);
    this.state = { value: props.value };
    this.nativeInput = null;
  }

  onChange(event) {
    this.setState({ value: event.target.value });
    event.persist();
    this.debouncedChange(event);
  }

  generateDebouncedHandler(props) {
    const { onChange, debounce } = props;
    this.debouncedChange = debounce === undefined ?
      onChange :
      debounceFn(onChange, debounce);
  }

  componentWillReceiveProps(props) {
    this.generateDebouncedHandler(props);
    this.setState({ value: props.value });
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      setTimeout(() => this.nativeInput.focus());
    }
  }

  render() {
    const {
      error,
      type,
      className,
      style,
      placeholder,
      onFocus,
      onBlur,
      onKeyDown,
      getRef,
    } = this.props;
    const inputProps = {
      className,
      style,
      value: this.state.value,
      onChange: this.onChange,
      onFocus,
      onBlur,
      onKeyDown,
      placeholder,
      type: type || 'text',
      ref: (node) => {
        this.nativeInput = node;
        if (getRef) { getRef(node); }
      }
    };
    const hasBox = !!error && !isBoolean(error);

    const wrapperProps = {
      style,
      className: classNames(
        className,
        styles.wrapper,
        {
          [styles.error]: !!error,
          [styles.withBox]: hasBox
        }
      )
    };

    return (
      <div { ...wrapperProps }>
        <input { ...inputProps } />
        {
          hasBox ?
            <div className={ styles.errorBox }>{ error }</div> :
            <noscript />
        }
      </div>
    );
  }
}

Input.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  error: PropTypes.any,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool
};
