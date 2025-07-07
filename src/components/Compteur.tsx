import {useState} from 'react';
type Props = {}

export default function Compteur({}: Props) {
    const [count, setCount] = useState(0);

    const handleIncrement= () => {        
        setCount(count + 1); 
    }

    const handleDecrement = () => {        
        setCount(count + 1); 
    }
    return (
        <div>
            <h1>Les événements en React</h1>
            <h3>Nombre de fois : {count}</h3>
            <button onClick={handleIncrement}>Incrémenter</button>
        </div>        
    )
}