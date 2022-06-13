import React from 'react';
import {createRoot} from 'react-dom/client';
import PrimeraApp from './PrimeraApp';
//import CounterApp from "./CounterApp";
import './index.css';

const divRoot = document.getElementById('root');
const root = createRoot(divRoot);

root.render(<PrimeraApp saludo='Hola soy Goku' />)
//root.render(<CounterApp value={5}/>);