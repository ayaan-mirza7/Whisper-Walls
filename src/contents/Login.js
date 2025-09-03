import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Member Login</h2>
        <form>
          <div className="form-group">
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="form-group">
            <input type="password" required />
            <label>Password</label>
          </div>
          <a href="#" className="recovery-link">Forgot Password?</a>
          <button type="submit" className="login-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;