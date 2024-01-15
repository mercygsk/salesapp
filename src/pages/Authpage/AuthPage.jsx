// import dependencies
import { useState } from 'react';
import styles from './AuthPage.module.css';

import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

function AuthPage(props) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      <div >
        {showLogin ? (
          <>
            <LoginForm setUser={props.setUser} />
            <p className={styles.toggleLink}>
              Don't have an account? <span onClick={() => setShowLogin(false)}>Sign Up</span>
            </p>
          </>
        ) : (
          <>
            <SignUpForm setUser={props.setUser} />
            <p className={styles.toggleLink}>
              Already have an account? <span onClick={() => setShowLogin(true)}>Log In</span>
            </p>
          </>
        )}
        </div>
    </main>
  );
}

export default AuthPage;
