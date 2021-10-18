import React, { useState } from 'react';
import { useHistory } from 'react-router';
import AuthService from '../../service/auth_service';
import styles from './my_page.module.css';

const MyPage = ({database}) => {
  const history = useHistory();
  const historyState = history?.location?.state;
  const [userId, setUserId] = useState(historyState && historyState.id)
  const [dataState, setDataState] = useState({
    orderNo : "d",
    brand: "dd"
  })

  database.viewData(userId, (data)=> {
    const orderNoVal = data.orderNo;
    const brandVal = data.brand;
    console.log(orderNoVal, brandVal)
    setDataState({
      [event.currentTarget.name] 
    })
  })



  return (
  <input type="text" value = "aa" />
)};

export default MyPage;