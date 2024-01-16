import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import * as userService from '../utilities/users-services';
import styles from './NavBar.module.css';
import '../index.css';

function NavBar(props) {
  
  function handleLogOut() {
    
    userService.logOut();
    
    props.setUser(null);
  }

  return (
    <nav className={`${styles.nav} ${styles.globalStyles}`}>
      <span className={`${styles.userWelcome} ${styles.globalStyles}`}><FaUser/> Welcome, {props.user.name}</span>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/" className={`${styles.navLink} ${styles.globalStyles}`}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/myproducts" className={`${styles.navLink} ${styles.globalStyles}`}>
            My Products
          </Link>
        </li>        
        <li>
          <Link to="/profile" className={`${styles.navLink} ${styles.globalStyles}`}>
            Profile
          </Link>
        </li>
        <li>
          <Link to="/settings" className={`${styles.navLink} ${styles.globalStyles}`}>
            Settings
          </Link>
        </li>
        <li>
          <Link to="" onClick={handleLogOut} className={`${styles.logoutLink} ${styles.globalStyles}`}>
            Log Out
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
