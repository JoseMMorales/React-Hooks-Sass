import { ToDos } from '../components/ToDoList/ToDos';
import { Input } from '../components/ToDoList/Input';

export function ToDoList() {

  return (
    <div className="container">
    <Input />
    <ToDos />
    </div>
  )
}
