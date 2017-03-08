import { pure } from 'recompose';
import { createElement, Component } from 'react';
import { map, reduce, zip } from 'lodash';

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pending: false,
      error: null,
      resolvedProps: null
    };
  }

  componentWillMount() {
    this.trigger(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.shouldRefetch(
      nextProps.originalProps,
      this.props.originalProps
    )) {
      this.trigger(nextProps, this.props.refetchInBackground);
    }
  }

  trigger(props, refetchInBackground = false) {
    const pendingProp = refetchInBackground ? 'refetching' : 'pending';
    this.setState({ [pendingProp]: true, error: null });
    const { resolve, originalProps } = props;
    const asList = map(resolve, (fn, key) => [key, fn]);
    const promises = Promise.all(map(asList, (el) => el[1](originalProps)));
    promises.then(
      (results) => {
        const resolvedProps = reduce(zip(asList, results), (mem, el) => {
          mem[el[0][0]] = el[1];
          return mem;
        }, {});
        this.setState({ [pendingProp]: false, resolvedProps, error: null });
      },
      (error) => this.setState({ [pendingProp]: false, error })
    );
  }

  render() {
    const { pending, refetching, error, resolvedProps } = this.state;
    const {
      originalProps,
      errorComponent,
      pendingComponent,
      component
    } = this.props;
    if (pending) {
      return pendingComponent ?
        createElement(pendingComponent, originalProps) :
        null;
    }

    if (error) {
      return errorComponent ?
        createElement(errorComponent, { ...originalProps, error }) :
        null;
    }

    return createElement(component, {
      ...originalProps,
      ...resolvedProps,
      refetching
    });
  }
}

const defaultShouldRefetch = () => true;

export default function withResolve(conf) {
  return (component) => {
    return pure((originalProps) => {
      const props = {
        shouldRefetch: defaultShouldRefetch,
        ...conf,
        originalProps,
        component
      };
      return createElement(Container, props);
    });
  };
}

