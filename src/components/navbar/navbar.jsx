import React, { memo } from 'react';
import styles from './navbar.module.css';

const Navbar = memo(({ totalCount }) => {
  return (
    <nav className={styles.navbar}>
      <i className={`${styles.navbarLogo} fas fa-fist-raised`}></i>
      <span>Habit Tracker</span>
      <span className={styles.navbarCount}>{totalCount}</span>
    </nav>
  );
});

export default Navbar;
