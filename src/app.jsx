import React from 'react';
import Auth from '~/components/auth/';
import Dashboard from '~/components/dashboard/';
import Home from '~/components/home/';
import {Route} from 'can-route-react';

export default ({page, changePage, setRoute}) => {
  return (
    <div>
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
