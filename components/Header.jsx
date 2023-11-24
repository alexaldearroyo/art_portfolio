import React from 'react';
import styles from '../styles/components/Header.module.css';


function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerText}>HeaderText</div>
      <div className={styles.headerNav}>HeaderNav</div>
    </div>
  );
}

export default Header;
