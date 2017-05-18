import '../debug/debuggap';
import 'lib-flexible';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import route from './Router/route'; // 路由配置
import store from './Redux/Store/store';
import './Style/common.scss';

ReactDOM.render(
    <Provider store={store}>
        {route}
    </Provider>,
    document.getElementById('root')
);
