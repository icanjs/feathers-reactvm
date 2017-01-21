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

import authManagement from '~/models/auth-management';
import SVGInline from 'react-svg-inline';
import logo from '~/img/logo.svg';
import Session from '~/models/session';
import User from '~/models/user';
import route from 'can-route';


const Signup = () => {
  return (
    <SignupForm
      Model={User}
      defaultValues={{
        email: '',
        password: '',
        emailError: ''
      }}
      validate={({email, emailError, password}) => {
        return {
          email: !email ? 'E-mail address is required' : emailError && 'e-mail not available' || null,
          password: !password ? 'Password is required' : null
        };
      }}
      asyncValidation={query => authManagement.checkUnique(query)} />
  );
};

const Login = () => {
  return (
    <LoginForm
      Model={Session}
      strategy='local'
      defaultValues={{
        email: '',
        password: ''
      }}
      validate={({email, password}) => {
        return {
          email: !email ? 'E-mail address is required' : null,
          password: !password ? 'Password is required' : null
        };
      }}
      onSuccess={() => {
        route.data.page = 'dashboard';
      }} />
  );
};

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

        {tab === 'login' && <Login />}
        {tab === 'signup' && <Signup />}
      </AuthContainer>
    </div>
  );
};
