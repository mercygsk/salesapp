import React, { Component } from 'react'
// import the SignUp method 
import { signUp } from '../../utilities/users-services';
import styles from '../../pages/Authpage/AuthPage.module.css';

export class SignUpForm extends Component {
    state = {
        name:'',
        email:'',
        password:'',
        confirm:'',
        error:''
    };

      handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };
        
    handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const formData = { ...this.state} // makes a copy of the state variable
            delete formData.error;
            delete formData.confirm;
            const user = await signUp(formData);
            this.props.setUser(user);

        } catch {
            this.setState({error: 'Sign Up Failed - Try Again'});
        }
    }

  render() {
    const disable = this.state.password !== this.state.confirm;

    return (
        <div>
            <div className={styles.authContainer}>
                <form className={styles.authForm} autoComplete='off' onSubmit={this.handleSubmit}>
                <h2>Sign Up</h2>
                    <div className={styles.authInputContainer}>
                    <label>Name</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                        <label>Email</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                        <label>Password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                        <label>Confirm</label>
                        <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                        <button type='submit' disabled={disable}>SIGN UP</button>
                    </div>
                </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
    )
  }
}

export default SignUpForm