import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Hammer from 'react-hammerjs';
import Style from '../calendar.scss';

class DayBox extends Component {
  render() {
    const date = this.props.date || {}, schData = this.props.schData;
    const year = date.getFullYear(), month = date.getMonth() + 1;
    const curDaySchData = (schData && schData[year] && schData[year][month] && schData[year][month][this.props.day]) || [];
    return (
    <Hammer onTap={this.onTap}>
      <div>
        <span>{this.props.day}</span>
        {curDaySchData.map((val, index) => {
          return <span key={index}>{val.theme}</span>;
        })}
      </div>
    </Hammer>
    );
  }
  onTap= () => {
    this.props.onTap(this.props.day);
  }
}

export default CSSModules(DayBox, Style);
