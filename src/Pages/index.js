import React, { Component } from 'react';
import '../Style/app.scss';
import { Grid } from 'antd-mobile';
// import Grid from 'antd-mobile/lib/grid';
// const week = [{text: '周日'}, {text: '周一'}, {text: '周二'}, {text: '周三'}, {text: '周四'}, {text: '周五'}, {text: '周六'}];
const week = Array.from(['日', '一', '二', '三', '四', '五', '六'].map((_val, i) => ({
  icon: null,
  text: `周${_val}`
})));
const data1 = Array.from(new Array(5)).map((_val, i) => ({
  // img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
  text: `name${i}`
}));
class App extends Component {
  render() {
    return (
    <div>
      <div className="sub-title">custom content</div>
      <Grid data={week} columnNum={7} />
      <Grid data={data1} columnNum={3} hasLine={false}
            renderItem={(dataItem, index) => (
              <div style={{ margin: '0.16rem', background: '#f7f7f7', textAlign: 'center' }}>
                <div style={{ background: 'rgba(0, 0, 0, 0.1)', padding: '0.08rem' }}>
                  <span>{index + 1}.{dataItem.text}</span>
                </div>
                <img src={dataItem.img} style={{ width: '80%', margin: '0.12rem' }} alt="" />
              </div>
            )}
      />
    </div>
    );
  }
}

export default App;
