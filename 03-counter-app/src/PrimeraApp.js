//Functional Components
import React from 'react';
import PropTypes from 'prop-types';
//import React, { Fragment } from 'react';

/*const PrimeraApp = () =>{
    return (
        <Fragment>
            <h1>Hola Mundo Prueba</h1>
            <p>Mi primera aplicacion</p>
        </Fragment>
    );
}*/

const PrimeraApp = ({saludo, subtitulo}) =>{

    return (
        <>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>

            
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired   
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp; 