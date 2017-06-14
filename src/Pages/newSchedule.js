import React, { Component } from 'react';
import { DatePicker } from 'antd-mobile';
import CSSModules from 'react-css-modules';
import TopMenu from '../Component/topMenu/topMenuNewSch';
import Style from '../Style/newSchedule.scss';

const DateSelect = props => (
  <div className="new-sch-time new-sch-start"
       onClick={props.onClick}>
    {props.children}
    <span>{props.extra}</span>
  </div>
);

class NewSchedule extends Component {
  state = {
    dpValue: null,
    visible: false
  }
  render() {
    return (
      <div styleName="new-sch">
        <TopMenu />
        <input styleName="new-sch-input" placeholder="例如：明天上午九点开会" />
        <div styleName="new-sch-content">
          <div styleName="new-sch-head">周末了，哈哈哈哈</div>
          <div styleName="new-sch-title">哈哈哈哈</div>
          <div styleName="new-sch-hr"></div>
          <DatePicker
            mode="date"
            title="选择日期"
            extra="请选择(可选)"
            value={this.state.dpValue}
            onChange={v => this.setState({ dpValue: v })}
          >
            <DateSelect>日期(CST)</DateSelect>
          </DatePicker>
          <div styleName="new-sch-time new-sch-end"></div>
        </div>
      </div>
    );
  }
}

export default CSSModules(NewSchedule, Style, {allowMultiple: true});
