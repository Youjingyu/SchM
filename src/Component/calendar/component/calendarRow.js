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
      activeDay: undefined
    };
  }
  render() {
    const rowDays = this.props.rowDays;
    const rowLength = this.props.rowLength;
    const rowHeight = 13 / rowLength;
    const date = this.props.date, schData = this.props.schData;
    const isActiveRow = this.props.rowKey === this.props.activeRowIndex;
    return (
      <div>
        <div styleName="cd-content" style={{height: rowHeight + 'rem'}}>
          {rowDays.map((day, index) => {
            return <DayBox key={index} day={day} date={date} schData={schData} onTap={this.onBoxTap}
                           isActiveRow={isActiveRow}
                           boxKey={index}
                           activeBoxIndex={this.props.activeBoxIndex} />;
          })}
        </div>
        <SchDetail isShow={isActiveRow} day={this.state.activeDay}
                   date={date} schData={schData}
                   height={rowHeight * (rowLength - 2)}/>
      </div>
    );
  }
  onBoxTap= (day, boxKey) => {
    this.setState({
      activeDay: day
    });
    const rowKey = boxKey === undefined ? undefined : this.props.rowKey;
    this.props.updateActiveIndex(rowKey, boxKey);
  }
}

export default CSSModules(CalendarRow, Style);
