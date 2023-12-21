import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, hashHistory } from 'react-router'

import store from './store/configureStore'

const history = syncHistoryWithStore(hashHistory, store);

const routes = {

  path: '/',
  indexRoute: { onEnter: (nextState, replace) => replace('/login') },
  childRoutes: [
    require('./routes/dashboard').default,
    require('./routes/smartadmin-intel').default,
    require('./routes/widgets').default,
    require('./routes/tables').default,
    require('./routes/ui').default,
    require('./routes/graphs').default,
    require('./routes/e-commerce').default,
    require('./routes/misc').default,
    require('./routes/auth').default,
    require('./routes/forms').default,

    require('./routes/approval').default,
    require('./routes/new-app').default,
    require('./routes/error').default,
    require('./routes/roulesscoring').default,
    require('./routes/loanproduct').default,
    require('./routes/bank').default,
    require('./routes/risklevel').default,
    require('./routes/rulesfilter').default,
    require('./routes/user').default,
    require('./routes/syncdata').default,
    // comment unused routes
    // this will speed up builds
  ]
};

ReactDOM.render((
  <Provider store={store}>
    <Router
      basename={'/los'}
      history={history}
      routes={routes}
    />
  </Provider>
), document.getElementById('smartadmin-root'));
