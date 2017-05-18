import React from 'react';
import ReactDOM from 'react-dom';
import App from '../wapComponent';
import Calendar from '../../src/Component/calendar/calendar';

// const App = WapComponent(Calendar);
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App components={Calendar}/>, div);
});
