import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './componenet/login/login';
import Maker from './componenet/maker/maker';

const App = ({authService, database}) => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path = "/">
          <Login authService={authService}/>
        </Route>
        <Route path = "/maker">
          <Maker
            database={database}
            authService={authService}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
  );

export default App;
