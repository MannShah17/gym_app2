import React, { useState } from 'react';

const Login = ({ setIsAuthenticated, history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Basic validation (you can add more)
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }

    // Retrieve user information from local storage
    const savedUser = JSON.parse(localStorage.getItem('user'));

    // Check if the entered credentials match the stored user
    if (
      savedUser &&
      savedUser.username === username &&
      savedUser.password === password
    ) {
      alert('Login successful!');
      // Redirect to home after login
      setIsAuthenticated(true);
      history.push('/');
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
