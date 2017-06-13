import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as reducer from '../Reducer/index';
import thunk from 'redux-thunk';

const preloadedState = {
  schData: {
    2017: {
      5: {
        10: [{theme: 'oooo'}]
      }
    }
  },
  dateData: new Date()
};
// 创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。
let store = createStore(
    combineReducers(reducer),
    preloadedState,
    applyMiddleware(thunk)
);

export default store;
