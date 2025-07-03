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

export default Welcome;