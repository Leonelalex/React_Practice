//Funciones en JS
function saludar(nombre){
    return `Hola, ${nombre}`;
}; // No se recomienda crear funciones de esta manera porque es muy facil modificarlas por error

//console.log(saludar);

//console.log(saludar('Goku'));

const saludo = function(nombre){
    return `Hola, ${nombre}`;
}

//console.log(saludo('Alex'));

//Funciones de flecha
const saludo2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludo3 =  (nombre) => `Hola ${nombre}`;

const saludo4 = () => 'Hola Mundo';

//console.log(saludo2("Veggeta"));
//console.log(saludo3('Leonel'));
//console.log(saludo4());

//console.log('----------------------')

const getUser = () => {
    return{
        uid: '123',
        userName: 'Goku'
    };
}

const getUser2 = () => ({
    uid: '456',
    userName: 'Vegeta'
});

//console.log(getUser());
//console.log(getUser2());

//TAREA 
//1. transformar a una funcion de flecha
//2. retornar un objeto implicito

//console.log('--- TAREA ---');

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    userName: nombre,
});

const user = getUsuarioActivo('Alex');

//console.log(user);

export {getUser, getUsuarioActivo}
