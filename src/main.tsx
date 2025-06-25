import { createRoot } from 'react-dom/client'
import './index.css'

const Test = () => {  
  return <h2>Je suis de retour</h2>
}

createRoot(document.getElementById('root')!).render(
  <>
    <h1>Bonjour tout le monde</h1>
    <Test />
  </>
)

