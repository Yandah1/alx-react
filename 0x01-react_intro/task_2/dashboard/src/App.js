import React from 'react';
import './App.css';
import logo from './holberton-logo.jpeg';
import { getFooterCopy, getFullYear } from './utils';
import Notifications from './Notifications';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Notifications />
        <img src={logo} alt="Holberton Logo" className="App-logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <hr className="separator" />
        <p>Login to access the full dashboard</p>
        <div className="login-form">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
          <button>OK</button>
        </div>
      </div>
      <footer className="App-footer">
        <hr className="separator" />
        <p>{getFooterCopy(false)}</p>
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;