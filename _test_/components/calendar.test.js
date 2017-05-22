import React from 'react';
// import ReactDOM from 'react-dom';
import Renderer from 'react-test-renderer';
import App from '../wapComponent';
import Calendar from '../../src/Component/calendar/calendar';

const component = Renderer.create(
  <App components={Calendar}/>
);
let tree = component.toJSON();
// console.log(Object.keys(Calendar.childContextTypes));
// const App = WapComponent(Calendar);
it('renders without crashing', () => {
  expect(tree).toMatchSnapshot();
  // const div = document.createElement('div');
  // ReactDOM.render(<App components={Calendar}/>, div);
});

it('swipe', () => {
  // Calendar.onSwipe({direction: 2});
  // const spy = jest.spyOn(Calendar, 'onSwipe');
  // spy({direction: 2});
  // tree.props.onSwipe({direction: 1});
});
