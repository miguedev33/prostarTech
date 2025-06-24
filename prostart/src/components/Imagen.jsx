//Componente para crear imagenes con un tamaño y una clase específica

//importar react
import React from 'react';

function Img({ src, alt, className, width, height, marginLeft, marginTop }) {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            style={{ width: width, height: height, marginLeft: marginLeft, marginTop: marginTop }}    
        />
    );
}
// Exportar el componente Img
export default Img;