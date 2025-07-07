type Props = {
    user : {
        id : number;
        name : string;
        age : number;
    }
}

export default function CarteUtilisateur({user}: Props) {
  return (
     <div 
        style={{
            padding: '10px', 
            border: '1px solid black', 
            margin: '5px'
        }} 
        key={user.id}
     >
        <p>{user.name}---{user.age}</p>
    </div>
  )
}