// LoginForm.jsx

import { useState } from 'react';
import * as usersService from '../../utilities/users-services';
import styles from '../../pages/Authpage/AuthPage.module.css';

export default function LoginForm({ setUser }) {
const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});
const [error, setError] = useState('');
function handleChange(evt) {
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  setError('');
}

async function handleSubmit(evt) {
  evt.preventDefault();
  try {
    const user = await usersService.login(credentials);
    setUser(user);
  } catch {
    setError('Log In Failed - Try Again');
  }
}

return (


  <div>
    <div className={styles.authContainer} onSubmit={handleSubmit}>
      <form autoComplete="off" className={styles.authForm}>
        <h2 className={styles.authFormTitle}>Login</h2>
        <div className={styles.authInputContainer}>
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">LOG IN</button>
        </div>
      </form>
    </div>
    <p className="error-message">&nbsp;{error}</p>
  </div>
);
}