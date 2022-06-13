//Desestructuracion de Objetos (Asignacion Desestructurante)
// ref: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Superheroe',
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

const {nombre} = persona;

console.log(nombre);

const persona2 = {
    nombre: 'Steve',
    edad: 75,
    clave: 'Cap',
}

const {nombre:nombre2, edad, clave} = persona2;

console.log(nombre2);
console.log(edad);
console.log(clave);

const retornaPersona = (usuario) => {
    const {nombre, edad, clave} = usuario;

    console.log(edad, clave, nombre);
}

retornaPersona(persona2)

const retornaNombreEdad = ({nombre, edad}) => {
    console.log(`${nombre} tiene ${edad} años.`);
}

retornaNombreEdad(persona);
retornaNombreEdad(persona2);

const retornaDefault = ({nombre, edad, rango = "No tiene"}) => {
    console.log(`${nombre} tiene ${edad} años. Rango: ${rango}`);
}

retornaDefault(persona);
retornaDefault(persona2);

console.log('--- ejercicio ---');

const data = ({edad, clave}) => 
    ({
        nombreClave: clave,
        anios: edad,
    })


const {nombreClave, anios} = data(persona);

console.log(nombreClave, anios);

console.log('---------');

const persona3 = {
    nombre: 'Steve',
    edad: 75,
    clave: 'Cap',
    latlng: {
        lat: 123,
        lng: 465,
    }
}

//desestructuracion anidada
const {latlng: {lat, lng}} = persona3;
console.log(lat, lng)
