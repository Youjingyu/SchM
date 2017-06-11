import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
// import Hammer from 'react-hammerjs';
import Style from '../calendar.scss';

class SchDetail extends Component {
  render() {
    const date = this.props.date || {}, schData = this.props.schData;
    const year = date.getFullYear(), month = date.getMonth() + 1;
    const curDaySchData = schData && schData[year] && schData[year][month] && schData[year][month][this.props.day];
    let result = <div styleName="cd-sch-detail-add">添加日程</div>;
    if(curDaySchData) {
      result = curDaySchData.map((val, index) => {
        return (<span key={index}>{val.theme}</span>);
      });
    }
    return (
      <div style={{display: this.props.isShow ? 'block' : 'none', height: this.props.height}} styleName="cd-sch-detail">
        {result}
      </div>
    );
  }
}

export default CSSModules(SchDetail, Style);
