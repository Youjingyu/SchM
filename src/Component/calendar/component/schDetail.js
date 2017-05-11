import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
// import Hammer from 'react-hammerjs';
import Style from '../calendar.scss';

class SchDetail extends Component {
  render() {
    // const data = this.props.day || 'hh';
    console.log(this.props.schData);
    return (
      <div style={{display: this.props.isShow ? 'block' : 'none'}} styleName="cd-sch-detail">
        {this.props.schData['2017']['5']['10'][0]['theme']}
      </div>
    );
  }
}

export default CSSModules(SchDetail, Style);
