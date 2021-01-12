import { useContext } from 'react';
import { GlobalContext } from '../../Context';

export function ToDos() {
  
  const {data, setData} = useContext(GlobalContext);
  const toDos = data.toDos;

  const toggle = (index) => {
    const newToDos = [...toDos];
    newToDos[index].completed = !newToDos[index].completed;

    setData(PrevState => ({ ...PrevState, toDos:[...newToDos] }));
  }

  const removeToDo = (toDo) => {
    const toDosFiltered = toDos.filter(task => task.title !== toDo.title);
    setData(PrevState => ({ ...PrevState, toDos: [...toDosFiltered] }));
  }
  
  return (
    <>
      <ul className='list-group list-group-toDos'>
        {
          toDos?.map((toDo, index) => { 
           return (
                  <li 
                    key={index}
                    className={`list-group-item ${toDo.completed && "item-completed"}`}>
                    <span 
                      onClick={() => toggle(index)}>
                      {index}: {toDo.title}
                    </span>
                    <button 
                      className='btn btn-danger'
                      onClick={() => removeToDo(toDo)}>
                      X
                    </button>
                  </li>
           );
          })
        }
      </ul>
    </>
  )
}
