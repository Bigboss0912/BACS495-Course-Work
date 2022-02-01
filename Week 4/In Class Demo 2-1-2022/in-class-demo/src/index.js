import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

ReactDOM.render(
  <Header />,
  <Body />,
  <Footer />,

  document.getElementById('root')
);
