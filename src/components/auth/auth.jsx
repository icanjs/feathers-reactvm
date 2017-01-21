import React from 'react';
import AuthContainer from 'auth-component/auth-container/auth-container';
import Tabs from 'auth-component/tabs/can-route';
import FacebookButton from 'auth-component/buttons/facebook/';
import GitHubButton from 'auth-component/buttons/github/';
import GoogleButton from 'auth-component/buttons/google/';
import MicrosoftButton from 'auth-component/buttons/microsoft/';
import TwitterButton from 'auth-component/buttons/twitter/';
import SignupForm from 'auth-component/forms/local-signup/';
import LoginForm from 'auth-component/forms/local-login/';

import SVGInline from 'react-svg-inline';
import logo from '~/img/logo.svg';
import Session from '~/models/session';

export default ({tab}) => {
  return (
    <div className='auth-page'>
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

        {tab === 'login' && <LoginForm Model={Session} />}
        {tab === 'signup' && <SignupForm Model={Session} />}
      </AuthContainer>
    </div>
  );
};
