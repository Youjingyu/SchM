import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSchData, updateDate } from '@/Redux/Action';
import CSSModules from 'react-css-modules';
import Hammer from 'react-hammerjs';
import CalendarRow from './component/calendarRow';
import computeDays from '@/Js/computeDays';
import Style from './calendar.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowIndex: undefined,
      activeBoxIndex: undefined
    };
  }
  render() {
    const week = ['日', '一', '二', '三', '四', '五', '六'];
    const days = computeDays(this.props.date);
    const schData = this.props.schData;
    return (
    <Hammer onSwipe={this.onSwipe}>
      <div styleName="calendar">
        <div styleName='cd-head'>
          {week.map((val, index) => {
            return <div key={index}>周{val}</div>;
          })}
        </div>
        {days.map((row, index) => {
          return (
            <CalendarRow key={index} rowDays={row} date={this.props.date} schData={schData}
                         rowKey={index}
                         activeRowIndex={this.state.activeRowIndex}
                         activeBoxIndex={this.state.activeBoxIndex}
                         updateActiveIndex={this.updateActiveIndex}
                         rowLength={days.length}/>
          );
        })}
      </div>
    </Hammer>
    );
  }
  onSwipe = (event) => {
    let date = this.props.date;
    if(event.direction === 2) {
      date.setMonth(date.getMonth() + 1);
    } else {
      date.setMonth(date.getMonth() - 1);
    }
    this.props.updateDate(date);
    this.setState({
      activeRowIndex: undefined,
      activeBoxIndex: undefined
    });
  }
  updateActiveIndex = (activeRowIndex, activeBoxIndex) => {
    this.setState({
      activeRowIndex: activeRowIndex,
      activeBoxIndex: activeBoxIndex
    });
  }
}

const mapStateToProps = (state, ownProps) => ({
  schData: state.schData,
  date: state.dateData
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateSchData: (schData) => {
    dispatch(updateSchData(schData));
  },
  updateDate: (date) => {
    dispatch(updateDate(date));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(App, Style));
