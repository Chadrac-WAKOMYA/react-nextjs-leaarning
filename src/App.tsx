import './App.css'

function App() {

  return (
    <>
      <h1>Je suis le composant principal</h1>
      <Salutation name="Chadrac" />
      <Salutation name="Wakomya" />
      <Salutation name="Kighundila" />
    </>
    
  );
}

export default App

type SalutationProps = {
  name: string;
}
const Salutation = ({name}: SalutationProps) => {
  return (
    <h2>Bonjour, {name}</h2>
  );
}
