
import getHeroeByIdAsync from "../../bases/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas en archivo 09', () =>{
    test('funcion getHeroesByIdAsync', (done) => { 
        
        const id = 1;

        getHeroeByIdAsync(id).then(heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
        });

     });

     test('reject function getHeroesByIdAsync', () => { 
         const id = 10;

         getHeroeByIdAsync(id).catch(error => {
             expect(error).toBe("No se pudo encontrar el heroe");
             done();
         });
      });
});