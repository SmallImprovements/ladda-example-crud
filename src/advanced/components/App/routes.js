import { Route, IndexRoute } from 'react-router';

import Root from './Root';
import Home from 'advanced/components/Home';
import ContactCreate from 'advanced/components/ContactCreate';
import ContactEdit from 'advanced/components/ContactEdit';

const routes = (
  <Route path="/advanced" component={ Root }>
    <IndexRoute component={ Home } />
    <Route path="create" component={ ContactCreate } />
    <Route path="edit/:id" component={ ContactEdit } />
  </Route>
);

export default routes;
