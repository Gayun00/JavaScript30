import { database } from 'firebase';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import MyOrder from './my_order';
import styles from './my_page.module.css';

const MyPage = ({database}) => {
  const history = useHistory();
  const historyState = history?.location?.state;
  const [userId, setUserId] = useState(historyState && historyState.id)
  let orderNoKeys;
  let dataSet;
  // const [dataState, setDataState] = useState({})

  database.viewData(userId, (data) => {
    orderNoKeys = Object.keys(data)
    dataSet = data;

    // console.log(data)
    // const dataSet = data;
    // console.log(orderNoKeys, dataSet)
    // orderNoKeys.map((key)=>{console.log(key)})
  })


  return (
    <>
      <h1>mypage</h1>
      <li className={styles.orders}>
        {orderNoKeys.map(orderNoKey=>
          <MyOrder orderNo={orderNoKey} data={dataSet[orderNoKey]}/>
        )}
      </li>
    </>
  )};

export default MyPage;