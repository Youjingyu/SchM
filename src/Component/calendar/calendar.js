import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Style from './calendar.scss';

function computeDays () {
  let date = new Date();
  let year = date.getFullYear(), month = date.getMonth();
  let isLeapYear = (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);
  let days = (month === 1) ? (28 + isLeapYear) : 31 - month % 7 % 2;
  let daysArr = new Array(days);
  for(let i = 0; i < days; i++) {
    daysArr[i] = i + 1;
  }
  date.setDate(1);
  let weekDay1th = date.getDay();
  let emptyDaysArr = new Array(weekDay1th).fill('');
  daysArr = emptyDaysArr.concat(daysArr);
  let resultArr = [], rowArr = [];
  for(let i = 0, len = daysArr.length; i < len; i++) {
    if(rowArr.length === 7) {
      resultArr.push(rowArr);
      rowArr = [];
    }
    rowArr.push(daysArr[i]);
    if(i === len - 1 && rowArr.length < 7 && rowArr.length !== 0) {
      resultArr.push(rowArr.concat(new Array(7 - rowArr.length).fill('')));
    }
  }
  return resultArr;
}
class App extends Component {
  render() {
    const week = ['日', '一', '二', '三', '四', '五', '六'];
    const days = computeDays();
    return (
    <div styleName="calendar">
      <div styleName='cd-head'>
        {week.map((val, index) => {
          return <div key={index}>周{val}</div>;
        })}
      </div>
      {days.map((row, index) => {
        return (
          <div styleName="cd-content" key={index}>
            {row.map((day, index) => {
              return <div key={index}>{day}</div>;
            })}
          </div>
        );
      })}
    </div>
    );
  }
}

export default CSSModules(App, Style);
