import React from 'react';
import { Router, Route } from 'dva/router';
import AppRoute from './routes/app/AppRoute';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={AppRoute} />{/* path ‘/’指向 component（子路由组件）‘AppRoute’ */}
    </Router>
  );
}

export default RouterConfig;
