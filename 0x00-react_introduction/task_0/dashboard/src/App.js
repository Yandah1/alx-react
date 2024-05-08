import React from 'react';
import './App.css';
import logo from './holberton-logo.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Holberton Logo" className="App-logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <hr className="separator" />
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
        <hr className="separator" />
        <p>Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;