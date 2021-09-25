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

  onclick(event) {
    onclick = this.props.onclick
  }

  renderSquare(i) {
    return (
      <Square
        value={i}
        onclick = {()=>this.props.onclick(i)}
      />
    )
  }
  render() {
    return (
      <div>
        <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        </div>
        <div className="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        </div>
        <div className="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
        </div>


      </div>
    );
  }
}

export default Board;