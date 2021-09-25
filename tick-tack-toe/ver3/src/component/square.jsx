/**
 * Board에서 만든 게임판에 한 '칸'을 관리한다.
 */
import React from 'react';

const Square = (props) => {
  return (
    <button className="square" >{props.value}</button>
  )
};

export default Square;