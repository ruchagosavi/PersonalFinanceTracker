// import React, { useState } from 'react';
// import axios from 'axios';

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/signup', formData);
//       setMessage(res.data.message);
//     } catch (err) {
//       console.error(err);
//       setMessage('Error signing up');
//     }
//   };

//   return (
//     <div className="container mt-5 col-md-6">
//       <h2 className="mb-4">Sign Up</h2>
//       {message && <div className="alert alert-info">{message}</div>}
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label>Name</label>
//           <input type="text" name="name" className="form-control" onChange={handleChange} required />
//         </div>
//         <div className="mb-3">
//           <label>Email</label>
//           <input type="email" name="email" className="form-control" onChange={handleChange} required />
//         </div>
//         <div className="mb-3">
//           <label>Password</label>
//           <input type="password" name="password" className="form-control" onChange={handleChange} required />
//         </div>
//         <button type="submit" className="btn btn-primary">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css'; // We'll write custom styles here

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });
    
      const [message, setMessage] = useState('');
    
      const handleChange = (e) => {
        setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post('http://localhost:5000/signup', formData);
          setMessage(res.data.message);
        } catch (err) {
          console.error(err);
          setMessage('Error signing up');
        }
      };
    
  return (
    <div className="signup-wrapper d-flex justify-content-center align-items-center vh-100">
      <div className="card signup-card shadow-lg">
        <div className="card-body p-5">
          <h2 className="text-center mb-4 fw-bold text-gradient">Create Account</h2>
          {message && <div className="alert alert-info">{message}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" name="name" className="form-control rounded-pill" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" name="email" className="form-control rounded-pill" onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label className="form-label">Password</label>
              <input type="password" name="password" className="form-control rounded-pill" onChange={handleChange} required />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary rounded-pill btn-lg">Sign Up</button>
            </div>
            <div className="text-center mt-3">
            <p>Already have an account? <a href="/login" className="text-primary fw-bold">Login here</a></p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
