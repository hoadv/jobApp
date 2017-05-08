import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import Routes from './routes';
import { browserHistory, hashHistory } from 'react-router';

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <Routes history={hashHistory} />
  </Provider>,
  document.getElementById('root')
)