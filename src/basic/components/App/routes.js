import { Route, IndexRoute } from 'react-router';

import Root from './Root';
import Home from 'basic/components/Home';
import ContactCreate from 'basic/components/ContactCreate';
import ContactEdit from 'basic/components/ContactEdit';

const routes = (
  <Route path="/basic" component={ Root }>
    <IndexRoute component={ Home } />
    <Route path="create" component={ ContactCreate } />
    <Route path="edit/:id" component={ ContactEdit } />
  </Route>
);

export default routes;
