import React from 'react';

const MyOrder = ({orderNo, data}) => {
  console.log(orderNo, data)
  return (
    <ul>
      <h4>Order</h4>
        <p>주문번호 : {orderNo}</p>
        <p>제품주문번호 : {data.orderNo}</p>
        <p>브랜드 : {data.brand}</p>
    </ul>
  )};

export default MyOrder;