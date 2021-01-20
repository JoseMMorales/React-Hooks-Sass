import { useState, useContext } from 'react';
import { GlobalContext } from '../../Context';

export function Input() {
	const [title, setTitle] = useState('');
	const handleChange = ((e) => setTitle(e.target.value));

	const {setData} = useContext(GlobalContext);

	const submitTask = (e) => {
		e.preventDefault();
		const newState = { userId: 1, title: title, completed: false };

		if (newState.title !== '') {
			setData(prevState => ({ ...prevState, toDos: [newState, ...prevState.toDos] }));
			setTitle('');
		} else {
			alert("Please enter a thing to do!!");
		}
	}

	return (
		<>
			<h1>ToDo List</h1>
			<form
				className='form-group'
				onSubmit={submitTask}>
				<input
					className='form-control'
					type="text"
					name="task-input"
					placeholder='Enter thing to do...'
					value={title}
					onChange={handleChange}
				/>
			</form>
		</>
	)
}
