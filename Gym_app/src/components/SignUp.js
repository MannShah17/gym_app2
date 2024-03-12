import React, { useState } from 'react';
import '../signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = () => {
    // Validate the form data (you can add your own validation logic here)
    if (!formData.username || !formData.email || !formData.password) {
      alert('Please fill in all fields');
      return;
    }

    // Save the user data in local storage
    localStorage.setItem('userData', JSON.stringify(formData));

    // Redirect the user to the home page or any other desired page
    window.location.href = '/'; // You can replace '/home' with the actual URL of your home page

    // Optionally, you can also set a flag in local storage to indicate that the user is logged in
    localStorage.setItem('isLoggedIn', true);
  };

  return (
    <div className='signup-container'>
      <div className='signup-form'>
        <h2>Sign Up</h2>
        <form>
          <div className='form-group'>
            <label>Username</label>
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleInputChange}
              placeholder='Enter your username'
            />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              placeholder='Enter your email'
            />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              placeholder='Enter your password'
            />
          </div>
          <button
            type='button'
            className='signup-button'
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
