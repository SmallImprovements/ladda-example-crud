import { Route, IndexRoute } from 'react-router';

import Root from './Root';
import ContactList from 'components/ContactList';
import ContactCreate from 'components/ContactCreate';
import ContactEdit from 'components/ContactEdit';

const routes = (
  <Route path="/" component={ Root }>
    <IndexRoute component={ ContactList } />
    <Route path="create" component={ ContactCreate } />
    <Route path="edit/:id" component={ ContactEdit } />
  </Route>
);

export default routes;
