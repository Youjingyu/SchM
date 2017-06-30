import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DatePicker } from 'antd-mobile';
import moment from 'moment';
import { zerofill, setDeepObjectData } from '../Js/utils';
import CSSModules from 'react-css-modules';
import { updateSchData } from '@/Redux/Action';
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
    const nowTime = moment(this.props.dateData);
    const state = this.props.location.state;
    const day = state && state.day;
    if(day) {
      nowTime.date(day);
    }
    if(nowTime.minute() > 30) {
      nowTime.hours(nowTime.hours() + 1);
      nowTime.minute(0);
    } else {
      nowTime.minute(30);
    }
    const endTime = nowTime.clone();
    this.state = {
      timeWarn: false,
      themeWarn: false,
      theme: '',
      startTime: nowTime,
      endTime: endTime.hours(endTime.hours() + 1)
    };
  }
  render() {
    const startTime = this.state.startTime;
    const endTime = this.state.endTime;
    const weekText = ['日', '一', '二', '三', '四', '五', '六'];
    return (
      <div styleName="new-sch">
        <TopMenu onConfirm={this.onConfirm}/>
        <span style={{display: this.state.timeWarn ? 'inline' : 'none'}} styleName="new-sch-warn">结束时间必须大于开始时间！</span>
        <span style={{display: this.state.themeWarn ? 'inline' : 'none'}} styleName="new-sch-warn">请输入主题！</span>
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
            defaultDate={startTime}
            title="开始日期"
            extra={zerofill(startTime.hours()) + ':' + zerofill(startTime.minute())}
            onChange={this.onStartChange}
          >
            <DateSelect type="startTime"></DateSelect>
          </DatePicker>
          <DatePicker
            mode="datetime1"
            defaultDate={endTime}
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
  onConfirm = () => {
    if(/^\s*$/.test(this.state.theme)) {
      this.setState({
        themeWarn: true
      });
    } else {
      if(!this.state.timeWarn) {
        let schData = this.props.schData;
        const state = this.state;
        const startTime = state.startTime;
        const year = startTime.year(), month = startTime.month() + 1, day = startTime.date();
        schData = setDeepObjectData([year, month, day], [{}, {}, []], schData);
        schData[year][month][day].push({
          theme: state.theme,
          startTime: state.startTime.hours() + ':' + state.startTime.minute(),
          endTime: state.endTime.hours() + ':' + state.endTime.minute()
        });
        this.props.updateSchData(schData);
        this.props.history.push('./');
      }
    }
  }
  inputOnChange = (event) => {
    const value = event.target.value;
    if(value !== '') {
      this.setState({
        themeWarn: false
      });
    }
    this.setState({
      theme: value
    });
  }
  onStartChange = (date) => {
    let warn = false;
    if(!date.isBefore(this.state.endTime)) {
      warn = true;
    }
    this.setState({
      timeWarn: warn,
      startTime: date.clone()
    });
  }
  onEndChange = (date) => {
    let warn = false;
    if(date.isBefore(this.state.endTime)) {
      warn = true;
    }
    this.setState({
      timeWarn: warn,
      endTime: date.clone()
    });
  }
}

const mapStateToProps = (state, ownProps) => ({
  schData: state.schData,
  dateData: state.dateData
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateSchData: (schData) => {
    dispatch(updateSchData(schData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(NewSchedule, Style, {allowMultiple: true}));
