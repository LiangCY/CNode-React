import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import configureStore from './configureStore'
import {syncHistoryWithStore} from 'react-router-redux'

import App from './containers/App'
import List from './containers/List'
import Topic from './containers/Topic'

const store = configureStore()

const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={List}/>
        <Route path="/share" component={List}/>
        <Route path="/ask" component={List}/>
        <Route path="/job" component={List}/>
        <Route path="/good" component={List}/>

      </Route>
      <Route path="/topic/:id" component={Topic}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
