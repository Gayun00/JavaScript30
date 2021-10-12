import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './componenet/login/login';
import Maker from './componenet/maker/maker';

const App = ({authService}) => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path = "/">
          <Login/>
        </Route>
        <Route path = "/maker">
          <Maker/>
        </Route>
      </Switch>
    </BrowserRouter>
  </>
  );

export default App;
