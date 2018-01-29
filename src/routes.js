'use strict';

import React from 'react'
import { Route} from 'react-router'
import NotFoundPage from './components/NotFoundPage';
import HomePage from './components/HomePage';

const routes = (
  <Route path="/" component={HomePage}>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
