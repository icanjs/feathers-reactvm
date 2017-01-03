import React from 'react';
import {Route} from 'can-route-react';

import SVGInline from 'react-svg-inline';
import logo from '~/img/logo.svg';

import AuthContainer from 'auth-component/auth-container/auth-container';
import Tabs from 'auth-component/tabs/can-route';
import FacebookButton from 'auth-component/buttons/facebook/';
import GitHubButton from 'auth-component/buttons/github/';
import GoogleButton from 'auth-component/buttons/google/';
import MicrosoftButton from 'auth-component/buttons/microsoft/';
import TwitterButton from 'auth-component/buttons/twitter/';
import SignupForm from 'auth-component/forms/signup/';
import LoginForm from 'auth-component/forms/login/';

export default ({tab}) => {
  console.log('auth tab', tab);
  return (
    <AuthContainer>
      <Tabs activeTab={tab} routeAttr='page' />

      <div className='auth-branding'>
        <SVGInline svg={logo} />
      </div>

      <div className='oauth-buttons'>
        <FacebookButton popup='true' />
        <GitHubButton popup='true' />
        <GoogleButton popup='true' />
        <MicrosoftButton popup='true' />
        <TwitterButton popup='true' />
      </div>

      {tab === 'login' && <LoginForm />}
      {tab === 'signup' && <SignupForm />}
    </AuthContainer>
  );
};
