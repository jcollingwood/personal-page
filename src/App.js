import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';

function Test1() {
  return <div>Test1</div>
}

function Test2() {
  return <div>Test2</div>
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/' render={() => <Test1 />} />
            <Route path='/test' render={() => <Test2 />} />
            <Route path='/test2' render={() => <Test1 />} />
            <Redirect from='*' to='/test2' />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
