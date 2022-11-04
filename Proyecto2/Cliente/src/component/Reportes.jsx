
import React from 'react';

const Home = () => {
    return (
        <>
        <div>
        <h1>Reportes</h1>
        <br />
        <br />
        </div>
        <div class="botones-div">
        <button  class="Abrir" style={{backgroundColor: "#8D9EFF"}}>Reporte de errores</button>
        <button  class="Agregar" style={{backgroundColor: "#BCE29E"}}>Arbol AST</button>
        <button  class="Guardar" style={{backgroundColor: "#F0EBCE"}}>Tabla de símbolos</button>
        </div>
        </>
    );
    };

export default Home;