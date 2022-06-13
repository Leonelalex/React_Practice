import React from 'react';
import { CounterCustomHook } from './components/01-useState/CounterCustomHook';
import { FormCustomHook } from './components/02-useEffect/FormCustomHook';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';

const HookApp = () => {
  return (
    <div>
      
      <CounterCustomHook />
      <FormCustomHook />
      <MultipleCustomHooks />

    </div>
  )
}

export default HookApp;
