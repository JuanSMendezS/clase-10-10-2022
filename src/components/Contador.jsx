import React, { useState } from 'react'

const Contador = () => {
    const [contador, setContador] = useState(0)

    const aumentar = () => setContador(contador + 1)
    const resetear = () => setContador(0)
    const decrementar = () => setContador(contador - 1)
    return (
        <div>
            <hr />
            <h1>Contador</h1>
            <h2>El valor de contador es: {contador}</h2>
            <h1>
                {
                    contador < 0 ? 'Contador negativo' : 'Contador positivo'
                }
            </h1>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={resetear}>Resetear</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    )
}

export default Contador