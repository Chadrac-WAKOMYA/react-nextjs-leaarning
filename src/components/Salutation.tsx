
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

export default Salutation;  