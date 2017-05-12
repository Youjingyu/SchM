import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
// import Hammer from 'react-hammerjs';
import DayBox from './dayBox';
import SchDetail from './schDetail';
import Style from '../calendar.scss';

class CalendarRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false,
      activeDay: undefined
    };
  }
  render() {
    const rowDays = this.props.rowDays || [];
    const date = this.props.date, schData = this.props.schData;
    return (
      <div>
        <div styleName="cd-content">
          {rowDays.map((day, index) => {
            return <DayBox key={index} day={day} date={date} schData={schData} onTap={this.onBoxTap} />;
          })}
        </div>
        <SchDetail isShow={this.state.showDetail} day={this.state.activeDay} date={date} schData={schData}></SchDetail>
      </div>
    );
  }
  onBoxTap= (day) => {
    const showDetail = this.state.showDetail;
    if(day !== '') {
      if(showDetail === true) {
        if(day === this.state.activeDay) {
          this.setState({
            showDetail: false
          });
        } else {
          this.setState({
            activeDay: day
          });
        }
      } else {
        this.setState({
          showDetail: true,
          activeDay: day
        });
      }
    } else {
      this.setState({
        showDetail: false
      });
    }
  }
}

export default CSSModules(CalendarRow, Style);
