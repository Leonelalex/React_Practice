//Primera prueba
//ref Jest: https://jestjs.io/

describe('Pruebas Demo', () => {

    test('primera prueba', () => { 
        
        const isActive = true;

        if(!isActive) {
            throw new Error('No esta activo');
        }

    });

    test('string iguales', () =>{
        const mensaje = 'Hola Mundo';
        const mensaje2 = "Hola Mundo";

        expect(mensaje).toBe(mensaje2);
    });
    
});