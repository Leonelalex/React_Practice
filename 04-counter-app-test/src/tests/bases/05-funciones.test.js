import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../bases/05-funciones";

describe('Pruebas en archivo 05', () => {

    test('funcion getUSer', () => { 
        const userTest = {
            uid: '123',
            userName: 'Goku'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
     });

     test('funcion getUsuarioActivo', () => { 
         const userTest ={
            uid: 'ABC567',
            userName: 'Alex',
        };

        const user = getUsuarioActivo('Alex');

        expect(user).toEqual(userTest);
      });

});

//user toEqual para comprar objetos