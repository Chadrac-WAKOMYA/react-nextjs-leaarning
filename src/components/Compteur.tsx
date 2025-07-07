import {useState} from 'react';
type Props = {}

export default function Compteur({}: Props) {
    const [count, setCount] = useState(0);
    const handleClick = () => {        
        setCount(count + 1); 
        console.log('La valeur du compteur est :', count+1);
    }
    return (
        <div>
            <h1>Les événements en React</h1>
            <h3>Nombre de fois : {count}</h3>
            <button onClick={handleClick}>Incrémenter</button>
        </div>        
    )
}