import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

    const [stateCar, setStateCar] = useState(false);

    const encenderApagar = () => {
        console.log("Encender / Apagar");
        setStateCar(!stateCar);
    }


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/* uso de hook de estado*/}
                <h3>El coche esta: {stateCar ? 'Encendido' : 'Apagado'}</h3>
                <button onClick={encenderApagar}>Encender / Apagar</button>

            </header>
        </div >
    );
}

export default App;
