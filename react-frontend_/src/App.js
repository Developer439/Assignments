import React, { Component } from 'react';
// import createBrowserHistory from 'history/createBrowserHistory';
import {Router, Route, Switch} from 'react-router-dom';
import Home from './components/home/home';
import Wallet from './components/wallet/wallet';
import Contest from './components/contest/contest';
const createBrowserHistory = require('history/createBrowserHistory');
class App extends Component {
  
showRender = (location) => {
  return (
      <div className="routeclass">
          <Switch location={location} key={location.key}>
                <Route  exact path="/contest" component={Contest}/>                             
                <Route  exact path="/wallet" component={Wallet}/>
                <Route  exact path={["/","*"]} component={Home}/>
          </Switch>               
      </div>
  );
}

  render() {
    return (
        <Router
        history={createBrowserHistory()}
        >
            <Route render={({location}) => (this.showRender(location))}/>
        </Router>
    );
}
}


export default App;
