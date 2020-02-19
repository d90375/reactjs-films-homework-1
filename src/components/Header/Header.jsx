import React from 'react';
import Logo from '../Logo';
import SearchPanel from '../SearchPanel';

import styles from './Header.scss';

const Header = () => (
  <header className={styles.header}>
    <Logo />
    <SearchPanel />
  </header>
);

export default Header;
