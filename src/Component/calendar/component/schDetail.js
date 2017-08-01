import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { computeSchTypeColor } from '@/Js/utils';
import CSSModules from 'react-css-modules';
// import Hammer from 'react-hammerjs';
import Style from '../calendar.scss';

class SchDetail extends Component {
  render() {
    const date = this.props.date || {}, schData = this.props.schData;
    const year = date.getFullYear(), month = date.getMonth() + 1;
    const day = this.props.day;
    const height = this.props.height;
    const curDaySchData = schData && schData[year] && schData[year][month] && schData[year][month][day];
    let result = <div styleName="cd-sch-detail-add"><Link to={{pathname: '/newSchedule', state: { day: day }}}>添加日程</Link></div>;
    if(curDaySchData) {
      // const itemHeight = height / 4 + 'rem';
      result = curDaySchData.map((val, index) => {
        return (
          <div key={index} styleName="cd-sch-detail-item">
              <div styleName="cd-sch-detail-line">
                <div style={{backgroundColor: computeSchTypeColor(val.type)}}></div>
              </div>
              <div styleName="cd-sch-detail-time">
                <div>{val.startTime}</div>
                <div>{val.endTime}</div>
              </div>
              <div styleName="cd-sch-detail-theme">{val.theme}</div>
          </div>
        );
      });
    }
    return (
      <div style={{display: this.props.isShow ? 'block' : 'none', height: height + 'rem'}} styleName="cd-sch-detail">
        {result}
      </div>
    );
  }
}

export default CSSModules(SchDetail, Style, {allowMultiple: true});
