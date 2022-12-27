import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { ThemeProvider } from '@mui/material/styles';
import { reducers } from './reducers';
import { Provider } from 'react-redux';
import { theme } from './themes/theme';
import CssBaseline from '@mui/material/CssBaseline';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </ThemeProvider>,

  document.getElementById('root')
);
