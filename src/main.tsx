import { createRoot } from 'react-dom/client'
import './index.css'

const Welcome = () => {
  const nom = "Chadrac"; // Vous pouvez changer le nom pour tester
  return <>
    <h2>Bienvenue dans mon application cher {nom === "Chadrac" ? "Invité" : "Inconnu"}</h2>
  </>
}
const Test = () => {  
  return <h2>Nous sommes de retour</h2>
}

createRoot(document.getElementById('root')!).render(
  <>
    <Welcome />
  </>
)

