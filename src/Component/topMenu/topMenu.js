import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
// import Hammer from 'react-hammerjs';
import Style from './topMenu.scss';

class BottomMenu extends Component {
  render() {
    const date = this.props.date;
    const month = date.getMonth() + 1;
    return (
      <div styleName="top-menu">
        <div styleName="top-menu-setting">
          <div></div>
        </div>
        <div styleName="top-menu-date" onClick={this.props.updateDate}>
          {date.getFullYear() + '.' + (month < 10 ? ('0' + month) : month)}
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

export default connect(mapStateToProps)(CSSModules(BottomMenu, Style, {allowMultiple: true}));
