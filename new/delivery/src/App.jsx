import './App.css';
import Login from './component/login/login'
import React from "react";
// import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './component/main/main';
import Order from './component/order/order';


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path ='/'>
            <Login/>
          </Route>
          <Route path='/main'>
            <Main/>
          </Route>
          <Route path='/order'>
            <Order/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>

  );
}

export default App;
