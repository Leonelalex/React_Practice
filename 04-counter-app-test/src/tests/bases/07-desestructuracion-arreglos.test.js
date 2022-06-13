import retornoArreglo from "../../bases/07-desestructracion-arreglos";

describe('Pruebas en archivo 07', () => {
    test('funcion retornoArreglo', () => { 
        const[letras, numero] = retornoArreglo();

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numero).toBe(123);
        expect(typeof numero).toBe('number');
     });
});