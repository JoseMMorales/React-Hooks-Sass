import { useState, useContext } from 'react';
import { GlobalContext } from '../../Context';

export function Form() {
	const [resetInputs, setResetInputs] = useState(
	{ name: '',
		surname: '',
		address: '',
		city: '',
		postCode: '',
		phone: '',
	});
	const [userInput, setUserInput] = useState(resetInputs);
	const {setData} = useContext(GlobalContext);

	const handleChange = e => {
		const { name, value } = e.target;
		setUserInput({...userInput, [name]: value});
	}

	const addContact = (event) => {
		event.preventDefault();
		setData(prevState => ({ ...prevState, users: [...prevState.users, userInput]}));
		setUserInput(prevState => prevState = resetInputs);
	}

	return (
		<div className='container form-container my-5'>
            <h1>Contact Form</h1>
            <form
                onSubmit={addContact}
                className='form-agenda'>
                <div className='form-group'>
                    <input
                        className='form-control mt-2'
                        onChange={handleChange}
                        name='name'
                        type='text'
                        placeholder='Enter your Name'
                        value={userInput.name}
                    />
                    <input
                        className='form-control mt-2'
                        onChange={handleChange}
                        name='surname'
                        type='text'
                        placeholder='Enter your Surname'
                        value={userInput.surname}
                    />
                    <input
                        className='form-control mt-2'
                        onChange={handleChange}
                        name='address'
                        type='text'
                        placeholder='Enter your Address'
                        value={userInput.address}
                    />
                    <input
                        className='form-control mt-2'
                        onChange={handleChange}
                        name='city'
                        type='text'
                        placeholder='Enter your City'
                        value={userInput.city}
                    />
                    <input
                        className='form-control mt-2'
                        onChange={handleChange}
                        name='postCode'
                        type='text'
                        placeholder='Enter your PostCode'
                        value={userInput.postCode}
                    />
                    <input
                        className='form-control mt-2'
                        onChange={handleChange}
                        name='phone'
                        type='tel'
                        placeholder='Enter your Phone Number'
                        value={userInput.phone}
                    />
                </div>
                <button
                    type='submit'
                    className='btn btn-primary'>
                    Submit
                </button>
            </form>
		</div>
	)
}
