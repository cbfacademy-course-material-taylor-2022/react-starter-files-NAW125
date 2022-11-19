import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom/client';
//import data from './models/headphones.json';

import GadgetList from './components/GadgetList';
import headphones from './models/headphones.json'
const mainStyle = {"fontFamily":"Arial"};

const App = () => {
  const [headphonesList] = useState(headphones);

  return <section style={mainStyle}>
    <h1>Electronics Store</h1>
    <GadgetList items={headphonesList}/>
  </section>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
