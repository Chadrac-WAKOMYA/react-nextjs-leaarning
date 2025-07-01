import './App.css'

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
      <Salutation name="Kighundila" />
    </>
    
  );
}

export default App

type SalutationProps = {
  name: string;
  age?: number; // age is optional
}
const Salutation = ({name, age}: SalutationProps) => {
  return (
    <>    
      <h2>
        Bonjour, {name}
        {typeof age === "number" && age < 18 ? ", mineur" : "Majeur"}
      </h2>   
    </>
  );
}

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
