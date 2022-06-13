import React, {useEffect} from 'react';
import { useForm } from '../../hooks/useForm';
import './effect.css';

export const FormCustomHook = () => {

    const [formState, hadleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const {name, email, password} = formState;

    useEffect(() => {

    }, [name]);

    useEffect(() => {

    }, [email]);
    
    const handleSubmit = (e) => {
        e.preventDefault(); // evita que el formulario se recarge por defecto
        console.log(formState);
    };

  return (
    <div className='effectContainer'>
        <form onSubmit={handleSubmit}>
        <h1>Custom Hook Form</h1>
            <input type='text' name='name' className='form-control' placeholder='Tu nombre' autoComplete='off' value={name} onChange={hadleInputChange} />
            <input type='text' name='email' className='form-control' placeholder='Email' autoComplete='off' value={email} onChange={hadleInputChange} />
            <input type='password' name='password' className='form-control' placeholder='********' autoComplete='off' value={password} onChange={hadleInputChange} />

            <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
    </div>
  )
}
