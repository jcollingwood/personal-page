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

function Test3() {
  return <div>Test3</div>
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' render={() => <Test1 />} />
            <Route path='/test' render={() => <Test2 />} />
            <Route path='/test2' render={() => <Test3 />} />
            <Redirect from='*' to='/' />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
