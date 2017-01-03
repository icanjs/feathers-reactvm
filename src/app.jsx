import React from 'react';
import Auth from '~/components/auth/';
import Home from '~/components/home/';
import {Route} from 'can-route-react';

export default ({page, changePage, setRoute}) => {
  const Dashboard = function () {
    return (
      <div style={{paddingTop: '10px'}}>Welcome to the Dashboard Page!</div>
    );
  };
  return (
    <div>
      <h1>The current page is {page}</h1>
      <button type='button' onClick={changePage('home')}> Home </button>
      <button type='button' onClick={changePage('dashboard')}> Dashboard </button>
      <button type='button' onClick={changePage('signup')}> Signup </button>
      <button type='button' onClick={changePage('login')}> Login </button>

      <Route data={{page: 'home'}} Component={Home} />
      <Route data={{page: 'dashboard'}} Component={Dashboard} />
      { (page === 'login' || page === 'signup') && <Auth tab={page} /> }
    </div>
  );
};
