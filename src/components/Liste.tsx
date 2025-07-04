import  { PureComponent } from 'react'

type Props = {}

export default class Liste extends PureComponent<Props> {
  render() {
    const users = [
          { id: 1, name: 'Chadrac', age: 16 },
          { id: 2, name: 'Wakomya', age: 20 },
          { id: 3, name: 'Kighundila', age: 18 },
        ];
    return (
      <>
        {
            users.map((user) => (
                <div style={{padding: '10px', border: '1px solid black', margin: '5px'}} key={user.id}>
                    {/* <p>{user.name}---{user.age}</p> */}
                </div>
            ))
        }
      </>
    );
  }
}