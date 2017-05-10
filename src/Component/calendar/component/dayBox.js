import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Hammer from 'react-hammerjs';
import Style from '../calendar.scss';

class DayBox extends Component {
  render() {
    const data = this.props.data || [];
    return (
    <Hammer onTap={this.onTap}>
      <div>
        <span>{this.props.day}</span>
        {data.map((val, index) => {
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
