//Desestructuracion de Arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [p1] = personajes;
console.log(p1)

const [, p2] = personajes;
console.log(p2);

const [,,p3] = personajes;
console.log(p3);

const retornoArreglo = () =>{
    return ['ABC', 123];
}

const [letras, numeros] = retornoArreglo();
console.log(letras, numeros);

//TAREA
//1. el primer valor del arreglo se llamara nombre
//2. el segundo se llamara setNombre
console.log('--- TAREA ---');

const tarea = (valor) => {
    return [valor, (val) => { console.log(`Hola ${val}`) } ];
};

const [nombre, setNombre] = tarea('Alex');

console.log(nombre);
console.log(setNombre('Goku'));