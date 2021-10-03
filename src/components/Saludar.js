import React from 'react';

export default function Saludar(props) {
    console.log(props);

    //usando destructurin
    const { userInfo, saludarFn } = props;
    //asignamos Anonimo en caso de que no se envie el nombre
    const { nombre = 'Anonimo', edad } = userInfo;

    return (
        <div>
            <button onClick={() => saludarFn(nombre, edad)}>Btnsaludar</button>

            {/* <p>
                Hola {props.userInfo.nombre},
                tiene {props.userInfo.edad} años,
                color faborito es: {props.userInfo.color}
            </p> */}

        </div>
    )
}