import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './routes/App';
// import { createStore, applyMiddleware } from 'redux';
// import reduxThunk from 'redux-thunk';

// import reducers from './reducers';

// const initialState = {};

/* const store = createStore(
  reducers, // Todos los reducers
  {}, // Estado inicial
  applyMiddleware(reduxThunk)
); */

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('app')
);
