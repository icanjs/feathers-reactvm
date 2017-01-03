import React from 'react';

const ListLink = ({toPage, text, page, changePage}) => {
  return (
    <li className={page === toPage && 'active'}>
      <a href='javascript://' onClick={changePage(toPage)}>{text}</a>
    </li>
  );
};

export default ({page, changePage}) => {
  return (
    <nav className='main-menu'>
      <ul style={{float: 'right'}}>
        <ListLink toPage='login' text='Login' page={page} changePage={changePage} />
      </ul>
      <ul>
        <ListLink toPage='home' text='Home' page={page} changePage={changePage} />
        <ListLink toPage='about' text='About' page={page} changePage={changePage} />
      </ul>
    </nav>
  );
};
