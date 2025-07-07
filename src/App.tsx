import './App.css'
import Compteur from './components/Compteur';
import Container from './components/Container';
import Liste from './components/Liste';
import Salutation from './components/Salutation';
import Welcome from './components/Welcome';

function App() {

  return (
    <>    
      <Welcome/>  
      <h1>Je suis le composant principal</h1>
      <Container title="Container d'éléments">
        <p>Je suis un paragraphe dans le composant Container</p>
        <h3>Je suis un test h3 dans le composant Container</h3>
      </Container>
      <Salutation name="Chadrac" age={16}/>
      <Salutation name="Wakomya" />
      <Salutation name="Kighundila" />
      <h1>Je rends une liste</h1>
      <Liste/>
      <Compteur/>
    </>
    
  );
}

export default App





