import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { browserHistory, Redirect } from 'react-router';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Store from '../Store/Store';
import Layout from '../Layout/Layout';
import { getToken } from 'root/Utils/request';

class Entry extends Component {
  componentDidMount() {
    // getToken();
  }

  render() {
    return (
      <Provider store={Store}>
        <Router
          history={browserHistory}
        >
          <Switch>
            <Route path="/" exact component={Layout} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default Entry;