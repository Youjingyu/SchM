import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import { zerofill } from '@/Js/utils';
// import Hammer from 'react-hammerjs';
import Style from './topMenu.scss';

class topMenu extends Component {
  render() {
    const date = new Date();
    return (
      <div styleName="top-menu top-menu-new-sch">
        <div styleName="top-menu-close">
          <Link to="/"><div></div></Link>
        </div>
        <div styleName="top-menu-date top-menu-time">
          {zerofill(date.getHours()) + ':' + zerofill(date.getMinutes())}
        </div>
        <div styleName="top-menu-confirm">
          <div onClick={this.props.onConfirm}></div>
        </div>
      </div>
    );
  }
}

export default CSSModules(topMenu, Style, {allowMultiple: true});
