import React from 'react';
import Auth from '~/components/auth/';
import Dashboard from '~/components/dashboard/';
import Menu from '~/components/menu/';
import Home from '~/components/home/';
import About from '~/components/about/';
import {Route} from 'can-route-react';

export default ({page, changePage, session}) => {
  return (
    <div>
      <Menu page={page} changePage={changePage} />

      <Route data={{page: 'home'}} Component={<Home changePage={changePage} />} />
      <Route data={{page: 'about'}} Component={About} />
      <Route data={{page: 'dashboard'}} Component={Dashboard} />
      { (page === 'login' || page === 'signup') && <Auth tab={page} /> }
    </div>
  );
};
