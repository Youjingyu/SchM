import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
// import Hammer from 'react-hammerjs';
import Style from '../calendar.scss';

class SchDetail extends Component {
  render() {
    const data = this.props.day || 'hh';
    return (
      <div style={{display: this.props.isShow ? 'block' : 'none'}} styleName="cd-sch-detail">
        {data}
      </div>
    );
  }
}

export default CSSModules(SchDetail, Style);
