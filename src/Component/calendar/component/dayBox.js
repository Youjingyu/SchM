import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Hammer from 'react-hammerjs';
import Style from '../calendar.scss';

class DayBox extends Component {
  render() {
    const date = this.props.date || {}, schData = this.props.schData;
    const year = date.getFullYear(), month = date.getMonth() + 1;
    const curDaySchData = (schData && schData[year] && schData[year][month] && schData[year][month][this.props.day]) || [];
    let box = <div><span>{this.props.day}</span></div>;
    if(curDaySchData.length > 0) {
      box = (<div styleName="cd-day-box-active">
        <span>{this.props.day}</span>
        {curDaySchData.map((val, index) => {
          return <span key={index}>{val.theme}</span>;
        })}
      </div>);
    }
    return (
    <Hammer onTap={this.onTap}>
      {box}
    </Hammer>
    );
  }
  onTap= () => {
    const day = this.props.day;
    if(day !== '') {
      this.props.onTap(day);
    }
  }
}

export default CSSModules(DayBox, Style);
