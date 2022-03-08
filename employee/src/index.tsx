import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import Routes from './navigation/Routes';
import reduxThunk from 'redux-thunk';
import reducers from './store/reducers';
import './styles/App.css'

const store = createStore(
  reducers,
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);