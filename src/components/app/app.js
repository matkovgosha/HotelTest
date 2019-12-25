import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { HomePage, RoomPage, AdminPage } from '../pages';



const App = () => {
  return (
    <main role="main" className="container">
      <Switch>
        <Route 
          path="/"
          component={HomePage}
          exact />

        <Route
          path="/room/:id"
            render ={({ match }) => {
              const { id } = match.params;
              return <RoomPage  itemId = {id} />
            }} />

        <Route 
          path="/admin"
          component={AdminPage}
          exact />  
           
        <Redirect to = "/" />
      </Switch>
    </main>
  );
};

export default App;
