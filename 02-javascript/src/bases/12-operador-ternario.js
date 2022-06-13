//Condicional ternario

const activo = true;

let mensaje = '';

if(activo){
    mensaje = 'Activo';
}else{
    mensaje = 'Inactivo';
}

//sintaxys
//const = condicion ? true : false;

const mensaje2 = (activo) ? 'Activo' : 'Inactivo';

// const mensaje = (activo) ? 'Activo' : null;

mensaje2 = !activo && 'Activo'; // forma corta cuando solo se necesita la condicion verdadera

console.log(mensaje2);