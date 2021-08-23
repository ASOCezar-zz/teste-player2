import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './contexts/UserProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import { GlobalStyles } from './styles/global-styles';
import { Login } from './Templates/Login';
import { Home } from './Templates/Home';
import { NotFound } from './components/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route component={Login} path="/login" />
          <Route component={Home} exact path="/" />
          <Route component={NotFound} path="*" />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
