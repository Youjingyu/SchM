import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
// import Hammer from 'react-hammerjs';
import Style from './topMenu.scss';

class BottomMenu extends Component {
  render() {
    return (
      <div styleName="top-menu">
        <div>
          <div styleName="top-menu-setting"></div>
        </div>
        <div styleName="top-menu-date"></div>
        <div>
          <div styleName="top-menu-serch"></div>
        </div>
      </div>
    );
  }
}

export default CSSModules(BottomMenu, Style, {allowMultiple: true});
