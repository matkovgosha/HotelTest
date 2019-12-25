import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import HotelstoreService from './services/hotelstore-service';
import { HotelstoreServiceProvider } from './components/hotelstore-service-context';

import store from './store';

const hotelstoreService = new HotelstoreService();


ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <HotelstoreServiceProvider value={hotelstoreService}>
        <Router basename={process.env.PUBLIC_URL}>
          <App />
        </Router>
      </HotelstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);