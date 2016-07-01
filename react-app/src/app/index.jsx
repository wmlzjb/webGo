import '../style/main.scss'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Login from '../routes/login/index.jsx'
import Dashboard from '../routes/dashboard/index.jsx'

import store from '../store'

injectTapEventPlugin();
render(
    <MuiThemeProvider>
        <Provider store={store}>
            <div>
                <Router history={hashHistory}>
                    <Route path="/" component={Login} />
                    <Route path="Dashboard" component={Dashboard} />
                </Router>
            </div>
        </Provider>
    </MuiThemeProvider>
    ,
    document.getElementById('app')
)