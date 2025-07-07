import  { PureComponent } from 'react'
import CarteUtilisateur from './CarteUtilisateur';

type Props = {}

export default class Liste extends PureComponent<Props> {
  render() {
    const users = [
          { id: 1, name: 'Chadrac', age: 17 },
          { id: 2, name: 'Wakomya', age: 20 },
          { id: 3, name: 'Kighundila', age: 18 },
        ];
    return (
      <>
        {
            users.map((user) => (
                <CarteUtilisateur user={user} />
            ))
        }
      </>
    );
  }
}