import './App.css'

function App() {

  return (
    <>
      <h1>Je suis le composant principal</h1>
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
    <h2>
      Bonjour, {name}
      {typeof age === "number" && age < 18 ? ", mineur" : "Majeur"}
    </h2>
  );
}
