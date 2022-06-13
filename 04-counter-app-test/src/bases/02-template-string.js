const nombre = 'Leonel';
const apellido = 'Recinos';

const nombreCompleto = ` ${nombre} ${apellido} `;

console.log(nombreCompleto);

function getSaludo(nombre = 'Carlos'){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);

//nota altgr + } = ``

export default getSaludo;


