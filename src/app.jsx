import React from 'react';
import AuthComponent from '~/components/auth/';

export default ({page, subpage, changePage, setRoute}) => {
  var component;
  switch (page) {
    case 'auth':
      component = <AuthComponent subpage={subpage} />;
      break;
  }

  return (
    <div>
      <h1>The current page is {page}</h1>
      <button type='button' onClick={changePage('home')}> Home </button>
      <button type='button' onClick={changePage('dashboard')}> Dashboard </button>
      <button type='button' onClick={setRoute({page: 'auth', subpage: 'signup'})}> Signup </button>
      <button type='button' onClick={setRoute({page: 'auth', subpage: 'login'})}> Login </button>
      {component}
    </div>
  );
}
