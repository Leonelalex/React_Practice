const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: '123456',
        lat: '14.12321',
        lng: '12.15321',
    }
};

console.log(persona);

const persona2 = persona; // = Asiganacion de referencia

console.log(persona2);

const persona3 = {...persona}; // ... copia de la info del objeto

console.log(persona3);