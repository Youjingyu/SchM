// import '../debug/debuggap';
import 'lib-flexible';
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import route from '@/Router/route'; // 路由配置
import store from '@/Redux/Store/store';
import '@/Style/common.scss';
jest.mock('react-dom');
export default class App extends Component {
  render() {
    const components = this.props.components;
    return(
      <Provider store={store}>
        <components />
      </Provider>
    );
  }
}
