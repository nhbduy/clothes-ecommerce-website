import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from 'components/Header/Header.component';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/Shop/Shop.component';
import SignInSignUpPage from './pages/SignInSignUp/SignInSignUp.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
