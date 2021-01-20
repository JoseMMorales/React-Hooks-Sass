import { useContext } from 'react';
import { GlobalContext } from '../../Context';

export function Agenda() {
	const {data, setData} = useContext(GlobalContext);
	const users = data.users;

	const removeContact = ((e) => {
		const newArray = users.filter(contact => contact.name !== e.target.name);

		setData(prevState => ({
		...prevState,
		users: [...newArray]
		}));
	});

	return (
		<>
            <h1>Agenda</h1>
            {
                users.map((contact, index) => {
                    return (
                        <ul className='list-group text-center list-group-agenda' key={index}>
                            <li className='list-group-item active mt-3'>
                                Contact {index}
                            </li>
                            {
                                Object.values(contact).map((value) => {
                                    return <li className='list-group-item'>{value}</li>
                                })
                            }
                            <li className='list-group-item'>
                                <button
                                    onClick={(e) => removeContact(e)}
                                    className='btn btn-danger btn-lg'
                                    name={contact.name}>
                                    Remove
                                </button>
                            </li>
                        </ul>
                    )
                })
            }
		</>
	)
}
