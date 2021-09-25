/**
 * Game 컴포넌트는 최상위 컴포넌트로, 데이터와 이벤트를 처리한다.
 */

import React, { Component } from 'react';
import Board from './board';

class Game extends Component {
  render() {
    return (
      <div>
        <Board/>
      </div>
    );
  }
}

export default Game;
