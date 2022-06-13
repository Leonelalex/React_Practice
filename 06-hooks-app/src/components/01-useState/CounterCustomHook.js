import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css'

export const CounterCustomHook = () => {
    const {state, increment, decrement, reset} = useCounter(1);
  return (
    <div className='counterContainer'>
        <h1>Counter with Hook: {state}</h1>
        <hr/>

        <button className='btn btn-primary'
        onClick={() => {increment(2)}}>+2</button>
        <button className='btn btn-primary'
        onClick={() => {decrement(3)}}>-3</button>
                <button className='btn btn-primary'
        onClick={reset}>reset</button>

    </div>
  )
}
