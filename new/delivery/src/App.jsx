import './App.css';
import Login from './component/login/login'
import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './component/main/main';
import Order from './component/order/order';
import Signup from './component/signup/signup';
import Order2 from './component/order/order2';
import OrderStep1 from './component/order/order_step1';
import MainHeader from './component/main/main_header';
import MyBoard from './component/my_page/my_board';
import MyPage from './component/my_page/my_page';


function App({authService, database}) {
  return (
    <>
      <BrowserRouter>
      <MainHeader
        authService={authService}
        database={database}
      />
        <Switch>
          <Route path ='/login'>
            <Login authService={authService}/>
          </Route>
          <Route exact path='/'>
            <Main authService={authService}/>
          </Route>
          <Route path='/order1'>
            <OrderStep1 database={database}/>
          </Route>
          <Route path='/signup'>
            <Signup authService={authService}/>
          </Route>
          <Route path ="/order">
            <Order2/>
          </Route>
          <Route path="/my_page">
            <MyPage database={database}/>
          </Route>
          <Route path = "/my_board">
            <MyBoard database={database}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>

  );
}

export default App;
