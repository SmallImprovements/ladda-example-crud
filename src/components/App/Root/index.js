import 'base.scss';

import { Component } from 'react';

import Nav from '../Nav';
import Footer from '../Footer';
import withOwnerId from 'hocs/withOwnerId';
import { setup } from 'services/Owner';

import styles from './styles.scss';


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
      setup().then(() => this.setReady());
    }
  }

  render() {
    const { isReady } = this.state;
    const { children } = this.props;
    return (
      <div>
          <Nav />
          <div className="container">
            { isReady ? children : <Setup /> }
          </div>
          <Footer />
      </div>
    );
  }
}

function Setup() {
  return (
    <div className={ styles.setup }>
      Creating sample content...
    </div>
  );
}

export default withOwnerId(Root);
