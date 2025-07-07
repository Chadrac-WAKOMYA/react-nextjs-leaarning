import {useState} from 'react';
type Props = {}

export default function Compteur({}: Props) {
    const [count, setCount] = useState(0);

    const handleIncrement= () => {        
        setCount(count + 1); 
    }

    const handleDecrement = () => {        
        setCount(count - 1); 
    }
    return (                 
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',                 
            }}
        >        
            <button onClick={handleDecrement} style={{margin : 10}}>-</button>
            <h3 > Nombre de fois : {count}</h3>
            <button onClick={handleIncrement}style={{margin : 10}}>+</button>
        </div>               
    )
}