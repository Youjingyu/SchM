import React, { Component } from 'react';
import Calendar from '../Component/calendar/calendar';
import BottomMenu from '../Component/bottomMenu/bottomMenu';

class App extends Component {
  render() {
    return (
      <div>
        <Calendar />
        <BottomMenu />
      </div>
    );
  }
}

export default App;
