import { Router, useRouterHistory } from 'react-router';
import { createHistory } from 'history';

import routes from './routes';

const browserHistory = useRouterHistory(createHistory)({
  basename: PRODUCTION ? '/ladda-example-crud' : '/'
});

export default function App() {
  return <Router history={ browserHistory } routes={ routes } />;
}
