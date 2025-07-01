import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import App from './App';

const nom: string = "Chadrac";
const age: number = 12;

const Welcome = () => {
  return (
    <>
      <h2>Bienvenue dans mon application, cher {nom === "Chadrac" ? "Invité" : "Inconnu"}</h2>
      <p>{ age < 18 ? 'Tu es mineur' : 'Tu es majeur'}</p>
    </>
  );
};

const h2 = React.createElement('h2', null, 'Bonjour avec du react sans JSX');

const Test = () => {  
  return (<h2>Nous sommes de retour</h2>);
}

createRoot(document.getElementById('root')!).render(
  <>
    <Welcome/>
    {h2}
    <Test />
    <App />
  </>
)

