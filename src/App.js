import React, { Component } from 'react';
import './Style/app.scss';
import { Flex, WhiteSpace } from 'antd-mobile';

let a = 1;
if(a == '') {
  a = 0;
}
const PlaceHolder = props => (
  <div style={{
    backgroundColor: '#ebebef',
    color: '#bbb',
    textAlign: 'center',
    height: '0.6rem',
    lineHeight: '0.6rem',
    width: '100%'
  }} {...props}
  >Item</div>
);
class App extends Component {
  render () {
    return (
      <div className="flex-container">
        <div className="sub-title">基本</div>
        <Flex>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
        </Flex>
        <WhiteSpace size="lg" />
        <Flex>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
        </Flex>
      </div>
    );
  }
}

export default App;
