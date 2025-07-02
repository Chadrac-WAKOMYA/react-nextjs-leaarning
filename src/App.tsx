import './App.css'
import Salutation from './components/Salutation';

function App() {

  return (
    <>      
      <h1>Je suis le composant principal</h1>
      <Container title="Container d'éléments">
        <p>Je suis un paragraphe dans le composant Container</p>
        <h3>Je suis un test h3 dans le composant Container</h3>
      </Container>
      <Salutation name="Chadrac" age={16}/>
      <Salutation name="Wakomya" />
      {/* <Salutation name="Kighundila" /> */}
    </>
    
  );
}

export default App




type ContainerProps = {
  children: React.ReactNode;
  title?: string;
}
const Container = ({children, title} : ContainerProps) => {
  return (
    <div style={{
      backgroundColor: 'grey',
      color : 'blue',
    }}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
