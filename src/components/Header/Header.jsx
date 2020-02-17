import React from 'react';
import Title from '../Title';
import SearchPanel from '../SearchPanel';

import styles from './Header.scss';

const Header = () => (
  <header className={styles.header}>
    <Title />
    <SearchPanel />
  </header>
);

export default Header;
