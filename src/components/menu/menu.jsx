import React from 'react';

const ListLink = ({toPage, text, page, changePage}) => {
  return (
    <li className={page === toPage && 'active'}>
      <a href='javascript://' onClick={changePage(toPage)}>{text}</a>
    </li>
  );
};

export default ({page, changePage, session, logout}) => {
  return (
    <nav className='main-menu'>
      {!session && <ul style={{float: 'right'}}>
        <ListLink toPage='login' text='Login' page={page} changePage={changePage} />
      </ul>}

      {session && <ul style={{float: 'right'}}>
        <li>
          <a href='javascript://' onClick={logout}>Logout</a>
        </li>
      </ul>}

      {!session && <ul>
        <ListLink toPage='home' text='Home' page={page} changePage={changePage} />
        <ListLink toPage='about' text='About' page={page} changePage={changePage} />
      </ul>}

      {session && <ul>
        <ListLink toPage='dashboard' text='Dashboard' page={page} changePage={changePage} />
      </ul>}
    </nav>
  );
};
