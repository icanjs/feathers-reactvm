import React from 'react';
import Auth from '~/components/auth/';
import Dashboard from '~/components/dashboard/';
import Menu from '~/components/menu/';
import Home from '~/components/home/';
import About from '~/components/about/';

export default ({page, changePage, session}) => {
  return (
    <div>
      <Menu page={page} changePage={changePage} />

      { page === 'home' && <Home changePage={changePage} />}
      { page === 'about' && <About />}
      { page === 'dashboard' && <Dashboard /> }
      { (page === 'login' || page === 'signup') && <Auth tab={page} /> }
    </div>
  );
};
