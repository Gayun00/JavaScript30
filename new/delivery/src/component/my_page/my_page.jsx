import { database } from 'firebase';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import MyOrder from './my_order';
import styles from './my_page.module.css';

const MyPage = ({database}) => {
  const history = useHistory();
  const historyState = history?.location?.state;
  const [userId, setUserId] = useState(historyState && historyState.id)
  const dataRef = useRef();

useEffect(()=> {
  database.viewData(userId, (data) => {

    dataRef.current = data;
    // console.log(dataRef.current)
    Object.keys(dataRef.current).map((key)=>{
      let eachData = dataRef.current[key];
    })
  })
})
 


  return (
    <>
      <h1>mypage</h1>
      <div className={styles.orders}>
        {/* {Object.keys(dataRef.current).map((key)=> {
          <MyOrder eachData = {dataRef.current[key]}/>
        })} */}
      </div>
    </>
  )};

export default MyPage;