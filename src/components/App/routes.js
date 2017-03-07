import { Route } from 'react-router';

import Root from './Root';
import ContactList from 'components/ContactList';
import ContactCreate from 'components/ContactCreate';
import ContactEdit from 'components/ContactEdit';

const routes = (
  <Route path="/" component={ Root }>
    <Route path="list" component={ ContactList } />
    <Route path="create" component={ ContactCreate } />
    <Route path="edit" component={ ContactEdit } />
  </Route>
);

export default routes;
