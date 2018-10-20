import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { MuiThemeProvider } from '@material-ui/core/styles';
import rootReducer from './reducers/index';
import LoginContainer from './containers/LoginContainer';
import myTheme from './ui/theme/index';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

render(
  <Provider store={store}>
    <MuiThemeProvider theme={myTheme}>
      <LoginContainer />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('login'),

);
