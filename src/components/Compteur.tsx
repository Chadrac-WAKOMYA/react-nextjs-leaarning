import React from 'react'

type Props = {}

export default function Compteur({}: Props) {
    let count = 0;
    const handleClick = () => {        
        count++; 
        console.log('Incrémentation du compteur');
    }
    return (
        <div>
            <h1>Les événements en React</h1>
            <h3>Nombre de fois : {count}</h3>
            <button onClick={handleClick}>Incrémenter</button>
        </div>        
    )
}