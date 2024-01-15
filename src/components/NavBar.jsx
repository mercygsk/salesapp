import React from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../utilities/users-services';
import styles from './NavBar.module.css';

function NavBar(props) {
  // Add in functionality to log out
  function handleLogOut() {
    // Delegate to users-service
    userService.logOut();
    // update state will also cause a re-render
    props.setUser(null);
  }

  return (
    <nav className={styles.nav}>
      <span className={styles.userWelcome}>Welcome, {props.user.name}</span>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/" className={styles.navLink}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/myproducts" className={styles.navLink}>
            My Products
          </Link>
        </li>        
        <li>
          <Link to="/profile" className={styles.navLink}>
            Profile
          </Link>
        </li>
        <li>
          <Link to="/settings" className={styles.navLink}>
            Settings
          </Link>
        </li>
        <li>
          <Link to="" onClick={handleLogOut} className={styles.logoutLink}>
            Log Out
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
