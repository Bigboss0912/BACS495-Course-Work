import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header myName='Me'/>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
