//Import, Export y Funciones comunes de arreglos
//ref: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find

//import {heroes, owners} from '../data/heroes';

import heroes from '../data/heroes';

const getHeroeById = (id) => {
    return heroes.find(x => x.id == id);
}

const heroe = getHeroeById(2);
//console.log(heroe);

const getHeroeById2 = (id) => heroes.find(x => x.id == id); // solo retorna 1 (el primero que encuentra)

//console.log(getHeroeById2(3));

const getHeroeByOwner = (owner) => heroes.filter(x => x.owner === owner); // retorna todas las coincidencias

//console.log(getHeroeByOwner('DC'));
//console.log(getHeroeByOwner('Marvel'));

//console.log(owners);

export {getHeroeById, getHeroeByOwner};