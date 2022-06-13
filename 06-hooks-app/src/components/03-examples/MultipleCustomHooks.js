import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './multiple.css';

export const MultipleCustomHooks = () => {

    const { state, increment} = useCounter(1);

  const {data, loading} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);

  const {author, quote} = !!data && data[0]; // !null = true -- !!null = false


  return (
    <div className='custonContainer'>
        <h1>Braking Bad Quotes</h1>
        <hr />

        {
            loading ? (
                <div className='alert alert-info text-center'>
                    Loading...
                </div>
            ) : (
                <blockquote className='blockquote text-right'>
                    <p className='mb-0'> {quote}</p>
                    <footer className='blockquote-footer'>{author}</footer>
                </blockquote>
            )
        }

        <button className='btn btn-primary' onClick={() => increment(1)}>Next</button>
    </div>
  )
}
