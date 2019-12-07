import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, RoomPage } from '../pages';



const App = () => {
  return (
    <main role="main" className="container">
      <Switch>
        <Route 
          path="/"
          component={HomePage}
          exact />

        <Route
          path="/room"
          component={RoomPage}
          />
      </Switch>
    </main>
  );
};

export default App;
