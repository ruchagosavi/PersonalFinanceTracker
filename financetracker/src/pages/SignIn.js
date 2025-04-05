import React, { useState } from 'react';
import axios from 'axios';
import './SignIn.css';

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [showForgot, setShowForgot] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/login', formData);
      setMessage(res.data.message);
      // Save token if you use JWT in future
    } catch (err) {
      setMessage('Login failed. Please check credentials.');
    }
  };

  const handleForgotPassword = async () => {
    try {
      const res = await axios.post('http://localhost:5000/forgot-password', {
        email: resetEmail
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage('Error processing request.');
    }
  };

  return (
    <div className="login-wrapper d-flex justify-content-center align-items-center vh-100">
      <div className="card login-card shadow-lg">
        <div className="card-body p-5">
          <h2 className="text-center mb-4 fw-bold text-gradient">Login</h2>
          {message && <div className="alert alert-info">{message}</div>}

          {!showForgot ? (
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label>Email</label>
                <input type="email" name="email" className="form-control rounded-pill" onChange={handleChange} required />
              </div>
              <div className="mb-4">
                <label>Password</label>
                <input type="password" name="password" className="form-control rounded-pill" onChange={handleChange} required />
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <button type="submit" className="btn btn-primary rounded-pill px-4">Login</button>
                <button
                  type="button"
                  className="btn btn-link text-decoration-none"
                  onClick={() => setShowForgot(true)}
                >
                  Forgot password?
                </button>
              </div>
            </form>
          ) : (
            <div>
              <label>Enter your registered email:</label>
              <input
                type="email"
                className="form-control rounded-pill mb-3"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
              />
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-secondary rounded-pill"
                  onClick={() => setShowForgot(false)}
                >
                  Back
                </button>
                <button
                  className="btn btn-success rounded-pill"
                  onClick={handleForgotPassword}
                >
                  Reset Password
                </button>
              </div>
            </div>
          )}
             <div className="text-center mt-3">
            <p>Dont have an account? <a href="/" className="text-primary fw-bold">SignUp here</a></p>
            </div>
        </div>
      </div>
   
    </div>
  );
};

export default SignIn;
