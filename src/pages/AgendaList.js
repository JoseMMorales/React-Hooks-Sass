import { Agenda } from '../components/AgendaList/Agenda';
import { Form } from '../components/AgendaList/Form';

export function AgendaList() {

  return (
    <div className='container-agenda'>
      <Agenda  />
      <Form />
    </div>
  )
}
