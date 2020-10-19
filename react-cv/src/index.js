import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './components/App';
import { HashRouter } from 'react-router-dom';


const rootReactElement = () => {

  return ( 
    <HashRouter>
      <App />
    </HashRouter>
  );
};

const target = document.getElementById('root');
render(rootReactElement(), target);

