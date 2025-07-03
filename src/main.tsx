import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import App from './App';



const h2 = React.createElement('h2', null, 'Bonjour avec du react sans JSX');

const Test = () => {  
  return (<h2>Nous sommes de retour</h2>);
}

createRoot(document.getElementById('root')!).render(
  <>
    {h2}
    <Test />
    <App />
  </>
)

