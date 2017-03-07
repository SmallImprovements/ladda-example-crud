import 'base.scss';

import { Component } from 'react';
import Nav from './Nav';
import withOwnerId from 'hocs/withOwner';

import { NotificationsProvider } from '../../services/Notifications';

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = { isReady: false };
  }

  setReady() {
    this.setState({ isReady: true });
  }

  componentWillMount() {
    if (this.props.ownerId) {
      this.setReady();
    } else {
      // create demo content, then set ready
    }
  }

  render() {
    const { isReady } = this.state;
    const { children } = this.props;
    return (
      <NotificationsProvider>
          <Nav />
          <div className="container">
            { isReady ? children : <Setup /> }
          </div>
      </NotificationsProvider>
    );
  }
}

function Setup() {
  return (
    <div>
      Setup...
    </div>
  );
}

export default withOwnerId(Root);
