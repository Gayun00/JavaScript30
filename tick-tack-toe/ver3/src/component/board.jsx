/**
 * 게임 보드를 그린다.
 */

import React, { Component } from 'react';
import Square from './square';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    }
  }

  renderSquare(i) {
    return (
      <Square value={i}/>
    )
  }
  render() {
    return (
      <div>
        {this.renderSquare(0)}

      </div>
    );
  }
}

export default Board;