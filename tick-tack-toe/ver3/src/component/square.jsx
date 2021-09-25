/**
 * Board에서 만든 게임판에 한 '칸'을 관리한다.
 */
import React, { Component } from 'react';

class Square extends Component {
  render() {
    return (
      <button className="square" onClick={this.props.onclick}>{this.props.value}</button>
    );
  }
}

export default Square;