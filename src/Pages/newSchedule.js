import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import TopMenu from '../Component/topMenu/topMenuNewSch';
import Style from '../Style/newSchedule.scss';

class NewSchedule extends Component {
  render() {
    return (
      <div styleName="new-sch">
        <TopMenu />
        <input styleName="new-sch-input" placeholder="例如：明天上午九点开会" />
        <div styleName="new-sch-content">
          <div styleName="new-sch-head">周末了，哈哈哈哈</div>
          <div styleName="new-sch-title">哈哈哈哈</div>
          <div styleName="new-sch-hr"></div>
          <div styleName="new-sch-time new-sch-start"></div>
          <div styleName="new-sch-time new-sch-end"></div>
        </div>
      </div>
    );
  }
}

export default CSSModules(NewSchedule, Style, {allowMultiple: true});
