import React, { Component } from 'react';
import Calendar from '../Component/calendar/calendar';
import TopMenu from '../Component/topMenu/topMenuIndex';
import BottomMenu from '../Component/bottomMenu/bottomMenu';

class App extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <Calendar />
        <BottomMenu />
      </div>
    );
  }
}

export default App;
