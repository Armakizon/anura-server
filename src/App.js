import React, { Component } from 'react';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage';
import NewServicePage from './pages/NewServicePage';
import { ToastContainer } from 'react-toastify';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Router >
          <div className="App">
            <Header />
            <Switch className="content">
              <Route path="/" exact component={MainPage} />
              <Route path="/new-service" component={NewServicePage} />
            </Switch>
          </div>
        </Router>
        <ToastContainer position={"bottom-left"} />
      </div>
    );
  }
}

export default App;
