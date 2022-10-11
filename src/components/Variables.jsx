import React from 'react'

const Variables = () => {
    const saludo = 'Hola mundo';
    const imagen = ' https://picsum.photos/500'
    const text_alt = 'Imagen aleatoria de Picsum'
    return (
        <div>
            <h1>{saludo}</h1>
            <img src={imagen} alt={text_alt} />
        </div>
    )
}

export default Variables