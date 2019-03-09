import React, {Component} from 'react'

import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'

import Menu from './components/Menu'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
            <Route exact path="/" component={Menu} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
