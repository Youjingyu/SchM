import React, {Component} from 'react';
// import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { HashRouter, BrowserRouter, Route, Redirect } from 'react-router-dom';

import index from '../Pages/index';

class Roots extends Component {
  render() {
    return (
            <div>{this.props.children}</div>
    );
  }
}

const Router = process.env.NODE_ENV !== 'production' ? BrowserRouter : HashRouter;

// const chooseProducts = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('../Component/chooseProducts').default)
//     },'chooseProducts')
// }

const RouteConfig = (
    <Router>
      <Roots>
        <Route path="/" component={index} />
        {/* <Route path="saleRecord" getComponent={saleRecord} />//销售记录 */}
        <Redirect from='*' to='/' />
      </Roots>
    </Router>
);

export default RouteConfig;
