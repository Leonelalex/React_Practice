import '@testing-library/jest-dom';
import getSaludo from "../../bases/02-template-string";

describe('Pruebas en archivo 02', () => {
    test('funcion getSaludo', () => { 
        const nombre = 'Alex';

        const res = getSaludo(nombre);
        expect(res).toBe('Hola ' + nombre);
     })

     test('getSaludo default', () => { 
         const res = getSaludo();
         expect(res).toBe('Hola Carlos');
      })
});