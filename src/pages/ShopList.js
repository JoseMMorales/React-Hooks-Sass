import { List } from '../components/ShopList/List';
import { Library } from '../components/ShopList/Library';

export function ShopList() {

  return (
    <div className='container-shoplist'>
      <h1>Shop List</h1>
      <List />
      <br/>
      <h1>Library</h1>
      <Library />
    </div>
  )
}