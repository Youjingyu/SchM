import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import TopMenu from '../Component/topMenu/topMenuNewSch';
import Style from '../Style/newSchedule.scss';

class NewSchedule extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <input styleName="new-sch-input" placeholder="例如：明天上午九点开会" />
      </div>
    );
  }
}

export default CSSModules(NewSchedule, Style, {allowMultiple: true});
