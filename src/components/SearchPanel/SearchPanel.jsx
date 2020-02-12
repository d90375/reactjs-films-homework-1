import React from 'react';

import styles from './searchPanel.scss';

const SearchPanel = () => {
  return <form className={styles.search}> 
    <input className={styles.search__input} type="search" />
    <button className={styles.search__button}></button>
  </form>
};

export default SearchPanel;
