import './App.css';
import Login from './component/login/login'
import React from "react";
// import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './component/main/main';
import Order from './component/order/order';
import Signup from './component/signup/signup';


function App({authService}) {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path ='/'>
            <Login authService={authService}/>
          </Route>
          <Route path='/main'>
            <Main/>
          </Route>
          <Route path='/order'>
            <Order/>
          </Route>
          <Route path='/signup'>
            <Signup authService={authService}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>

  );
}

export default App;
