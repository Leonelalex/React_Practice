import React, {useState, useEffect} from 'react';
import './effect.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    });

    const {name, email} = formState;

    useEffect(() => {
        console.log('nombre cambio');
    }, [name]);

    useEffect(() => {
        console.log('email cambio');
    }, [email]);
    
    const hadleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value,
        })
    };

  return (
    <div className='effectContainer'>
        <h1>Simple Form</h1>
        <input type='text' name='name' className='form-control' placeholder='Tu nombre' autoComplete='off' value={name} onChange={hadleInputChange} />
        <input type='text' name='email' className='form-control' placeholder='Email' autoComplete='off' value={email} onChange={hadleInputChange} />

        {
            (name === '123') && <Message />
        }
    </div>
  )
}
