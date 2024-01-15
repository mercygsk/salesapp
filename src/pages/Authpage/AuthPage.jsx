import { useState } from 'react';
import styles from './AuthPage.module.css';

import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

function AuthPage(props) {
  const [ showLogin, setShowLogin] = useState(true);

  return (
    <>
     <main className={styles.AuthPage} >
            <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
    { showLogin ? <LoginForm setUser={props.setUser} /> : <SignUpForm setUser={props.setUser}/>}
    </ main>
    
    </>
  );
}

export default AuthPage