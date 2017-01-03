import React from 'react';
import logo from '~/img/logo.svg';
import SVGInline from 'react-svg-inline';

export default ({changePage}) => {
  return (
    <section className='home-page'>
      <SVGInline svg={logo} />
      <div style={{paddingTop: '10px'}}>Welcome to My Awesome App!</div>
      <button type='button' onClick={changePage('signup')} >Signup</button>
    </section>
  );
};
