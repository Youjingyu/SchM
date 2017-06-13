import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import { zerofill } from '@/Js/utils';
// import Hammer from 'react-hammerjs';
import Style from './topMenu.scss';

class topMenu extends Component {
  render() {
    const date = this.props.date;
    const month = date.getMonth() + 1;
    return (
      <div styleName="top-menu">
        <div styleName="top-menu-setting">
          <div></div>
        </div>
        <div styleName="top-menu-date">
          {date.getFullYear() + '.' + zerofill(month)}
        </div>
        <div styleName="top-menu-serch">
          <div></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  date: state.dateData
});

export default connect(mapStateToProps)(CSSModules(topMenu, Style, {allowMultiple: true}));
