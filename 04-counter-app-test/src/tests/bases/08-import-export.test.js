import { getHeroeById, getHeroeByOwner } from "../../bases/08-import-export";
import heroes from "../../data/heroes";

describe('Pruebas en archivo 08', () => {
    
    test('funcion getHeroesById', () => { 
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
     });

     test('undefine funcion getHeroeById', () =>{

         const id = 7;
         const heroe = getHeroeById(id);

         expect(heroe).toBe(undefined);
     });

     test('DC funcion getHeroesByOwner', () => { 
        const owner = 'DC';
        const DCHeroes = getHeroeByOwner(owner);

        const DataHeroes = heroes.filter(h => h.owner == owner);

        expect(DCHeroes).toEqual(DataHeroes);
      });

      test('Marvel funcion getHeroesByOwner', () => { 
          const owner = 'Marvel';
          const MarvelHeroes = getHeroeByOwner(owner);

          expect(MarvelHeroes.length).toBe(2);
       });

       test('undefine function getHeroesByOwner', () => { 
           const heroes = getHeroeByOwner('JL');

           expect(heroes).toEqual([]);
        })
});