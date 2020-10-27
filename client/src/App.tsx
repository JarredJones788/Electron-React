import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import TopBar from './components/topBar/topBar';
import Home from './pages/home/home';
import Login from './pages/login/login';

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Route render={(props: any) => <TopBar history={props.history} />} />
        <Switch>
          <Route path="/" render={(props: any) => <Home history={props.history} />} exact />
          <Route path="/login" render={(props: any) => <Login history={props.history} />} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
