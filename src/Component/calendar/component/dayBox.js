import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Hammer from 'react-hammerjs';
import Style from '../calendar.scss';

class DayBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickClassName: ''
    };
  }
  render() {
    const date = this.props.date || {}, schData = this.props.schData;
    const year = date.getFullYear(), month = date.getMonth() + 1;
    const curDaySchData = (schData && schData[year] && schData[year][month] && schData[year][month][this.props.day]) || [];
    if(this.props.activeRowIndex === this.props.curRowIndex) {
      this.setState({
        clickClassName: Style['cd-day-box-click-active']
      });
    }
    const className = (curDaySchData.length > 0 ? (Style['cd-day-box-active'] + ' ') : '') + this.state.clickClassName;
    return (
    <Hammer onTap={this.onTap}>
      <div className={className}>
        <span>{this.props.day}</span>
        {curDaySchData.map((val, index) => {
          return <span key={index}>{val.theme}</span>;
        })}
      </div>
    </Hammer>
    );
  }
  onTap= () => {
    const day = this.props.day;
    if(day !== '') {
      this.setState({
        clickClassName: Style['cd-day-box-click-active']
      });
      this.props.onTap(day, this.props.key);
    }
  }
}

export default CSSModules(DayBox, Style);
