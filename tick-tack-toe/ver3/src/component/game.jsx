/**
 * Game 컴포넌트는 최상위 컴포넌트로, 데이터와 이벤트를 처리한다.
 */

import React, { Component } from 'react';
import Board from './board';

class Game extends Component {

  state = {
    value: 'X'
  }

  handleMark (event) {
    console.log("clicked-board")
  }


  render() {
    return (
    <>
      <div>
        <Board
          onclick = {this.handleMark}
        />
      </div>
    </>
    );
  }
}

export default Game;
