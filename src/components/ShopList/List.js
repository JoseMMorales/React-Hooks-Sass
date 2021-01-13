import { useContext } from 'react';
import { GlobalContext } from '../../Context';

export function List() {
  const {data} = useContext(GlobalContext);
 
  return (
    <>
      {
        Object.entries(data.shop).map((key, index) => {
        return (
          <>
            <ul className='list-group list-group-shopList'>
              <li className='list-group-item active' key={`Li-${index}`}>
                <h5>
                  {key[0]}
                </h5>
              </li>
               {
                  key[1].map(value => {
                    return (
                          <li 
                            className='list-group-item' 
                            key={`${value.product}`}>
                             {value.model ?
                                `${value.product} ${value.brand} ${value.model} ${value.price}$` :
                                `${value.product} ${value.brand} ${value.price}$`
                              }
                          </li>
                    )
                  })
                }
            </ul>
          </>
        )
      })
      }
          
        
       
      
    </>
  )
}
