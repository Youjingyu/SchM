import React, { Component } from 'react';
import { DatePicker } from 'antd-mobile';
import moment from 'moment';
import { zerofill } from '../Js/utils';
import CSSModules from 'react-css-modules';
import TopMenu from '../Component/topMenu/topMenuNewSch';
import Style from '../Style/newSchedule.scss';

const DateSelect = props => {
  const className = props.type === 'startTime' ? Style['new-sch-start'] : Style['new-sch-end'];
  return (
  <div className={Style['new-sch-time'] + ' ' + className}
       onClick={props.onClick}>
    {props.children}
    <span>{props.extra}</span>
  </div>
  );
};

class NewSchedule extends Component {
  constructor(props) {
    super(props);
    const nowTime = moment();
    if(nowTime.minute() > 30) {
      nowTime.hours(nowTime.hours() + 1);
      nowTime.minute(0);
    } else {
      nowTime.minute(30);
    }
    const endTime = nowTime.clone();
    this.state = {
      warn: false,
      theme: '',
      startTime: nowTime,
      endTime: endTime.hours(endTime.hours() + 1)
    };
  }
  onConfirm = () => {
    if(!this.state.warn) {
      this.props.history.push('./');
    }
  }
  render() {
    const startTime = this.state.startTime;
    const endTime = this.state.endTime;
    const weekText = ['日', '一', '二', '三', '四', '五', '六'];
    return (
      <div styleName="new-sch">
        <TopMenu onConfirm={this.onConfirm}/>
        <span style={{display: this.state.warn ? 'inline' : 'none'}} styleName="new-sch-warn">结束时间必须大于开始时间！</span>
        <input styleName="new-sch-input" placeholder="例如：明天上午九点开会" value={this.state.theme} onChange={this.inputOnChange}/>
        <div styleName="new-sch-content">
          <div styleName="new-sch-head">
            <div>
              {
                zerofill(startTime.month() + 1) + '月' +
                zerofill(startTime.date()) + '日' +
                ' 周' + weekText[startTime.day()]
              }
              </div>
            <div>
              {
                zerofill(endTime.month() + 1) + '月' +
                zerofill(endTime.date()) + '日' +
                ' 周' + weekText[endTime.day()]
              }
            </div>
          </div>
          <div styleName="new-sch-title">{this.state.theme}</div>
          <div styleName="new-sch-hr"></div>
          <DatePicker
            mode="datetime1"
            title="开始日期"
            extra={zerofill(startTime.hours()) + ':' + zerofill(startTime.minute())}
            onChange={this.onStartChange}
          >
            <DateSelect type="startTime"></DateSelect>
          </DatePicker>
          <DatePicker
            mode="datetime1"
            title="结束日期"
            extra={zerofill(endTime.hours()) + ':' + zerofill(endTime.minute())}
            onChange={this.onEndChange}
          >
            <DateSelect type="endTime"></DateSelect>
          </DatePicker>
        </div>
      </div>
    );
  }
  inputOnChange = (event) => {
    this.setState({
      theme: event.target.value
    });
  }
  onStartChange = (date) => {
    let warn = false;
    if(!date.isBefore(this.state.endTime)) {
      warn = true;
    }
    this.setState({
      warn: warn,
      startTime: date.clone()
    });
  }
  onEndChange = (date) => {
    let warn = false;
    if(date.isBefore(this.state.endTime)) {
      warn = true;
    }
    this.setState({
      warn: warn,
      endTime: date.clone()
    });
  }
}

export default CSSModules(NewSchedule, Style, {allowMultiple: true});
