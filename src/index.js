import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import InputWindow from './components/inputwindow';
import Output from './components/output';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <InputWindow />
    <Output />
  </React.StrictMode>,
  document.getElementById('root')
);
