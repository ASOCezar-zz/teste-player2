import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './contexts/UserProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import { GlobalStyles } from './styles/global-styles';
import { Login } from './Templates/Login';
import { Home } from './Templates/Home';
import { BankDetails } from './Templates/BankDetails';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Switch>
            <Route component={BankDetails} path="/messages/:id" exact />
            <Route component={Login} path="/login" />
            <Route component={Home} path="*" />
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
