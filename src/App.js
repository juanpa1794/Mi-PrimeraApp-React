import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';

function App() {


  /* //creamos un objeto user
  const user = {
    nombre: 'juan',
    edad: 27,
    color: 'red',
  }

  const saludarFn = (nombre, edad) => {
    //usando template string
    console.log(`hola ${nombre}, tiene ${edad} años`)
  } */

  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);

  useEffect(() => {
    console.log('Total: ' + contar);
  }, [contar]);

  const encenderApagar = () => {
    setStateCar(!stateCar);
    setContar(contar + 1);
  }




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* uso de hook de estado*/}

        <h3>El coche esta: {stateCar ? 'Encendido' : 'Apagado'}</h3>
        <h4>Clicks :{contar}</h4>
        <button onClick={encenderApagar}>Encender / Apagar</button>

        {/* <Saludar userInfo={user} saludarFn={saludarFn} /> */}


      </header>
    </div >
  );
}

export default App;
