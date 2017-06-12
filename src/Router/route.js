import React from 'react';
// import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { HashRouter, BrowserRouter, Route, Redirect } from 'react-router-dom';

import index from '../Pages/index';
import newSchedule from '../Pages/newSchedule';

const Router = process.env.NODE_ENV !== 'production' ? BrowserRouter : HashRouter;

// const chooseProducts = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('../Component/chooseProducts').default)
//     },'chooseProducts')
// }

const RouteConfig = (
    <Router>
      <div>
        <Route exact path="/" component={index} />
        <Route path="/newSchedule" component={newSchedule} />
        {/* <Route path="saleRecord" getComponent={saleRecord} />//销售记录 */}
        <Redirect from='*' to='/' />
      </div>
    </Router>
);

export default RouteConfig;
