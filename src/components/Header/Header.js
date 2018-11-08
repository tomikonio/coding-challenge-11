import React from 'react';

import style from './Header.module.css';
import logo from '../../svgs/logo.svg';

const Header = () => (
  <header className={style.Header}>
    <img src={logo} className="App-logo" alt="logo" />
    <button>Try It Free</button>
  </header>
);

export default Header;
