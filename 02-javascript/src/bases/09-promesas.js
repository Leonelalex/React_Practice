//Promesas
// ref: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

import { getHeroeById, getHeroeByOwner } from './bases/08-import-export'

/*const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        const heroe = getHeroeById(5);
        resolve(heroe);

    }, 2000);

});


promesa.then((heroe) => {
    console.log('heroe', heroe);
}).catch(
    err => console.log(err)
);*/

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(heroe)
                resolve(heroe);

            reject("No se pudo encontrar el heroe");
    
        }, 2000);
    
    });
}

getHeroeByIdAsync(6)
    .then(res => console.log('Heroe: ', res))
    .catch(err => console.warn(err));