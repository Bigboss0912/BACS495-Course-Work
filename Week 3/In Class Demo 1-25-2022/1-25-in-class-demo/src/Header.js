import React from "react";
import './App.css';
import logo from './logo.svg';

function Header({myName}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with {myName}
        </a>
      </header>
    </div>
  );
}

export default Header;