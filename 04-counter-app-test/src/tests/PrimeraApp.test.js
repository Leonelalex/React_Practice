import {render} from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas componenete PrimeraApp', () => {
    test('saludo', () => { 
        
        const saludo = 'Hola, soy Goku'; 

        const {getByText} = render(<PrimeraApp saludo={saludo}/>);

        expect(getByText(saludo)).toBeInTheDocument();
     })
});