
import React from 'react';

let RErrores = '';

//Make a get request to the server and get the report
async function getReporteErrores(){
    try {
        const response = await fetch("http://localhost:3003/enviar/errores", {
          method: 'GET',
          headers: {}
        });
        var reporte = document.getElementById('reporte');
        if (response.ok) {
          const result = await response.json();
          console.log(result.html);
            
            reporte.innerHTML = result.html;
            RErrores = result.html;
        }else{
           
            reporte.innerHTML = RErrores;
        }
      } catch (err) {
        console.error(err);
      }
}

async function getReporteAST(){
    //Get a svg file from the server and show it in div reporte
    try {
        const response = await fetch("http://localhost:3003/enviar/ast", {
            method: 'GET',
            headers: {}
            });
            if (response.ok) {
                const result = await response.json();
                console.log(result.html);
                
                //save the svg in a iframe
                var iframe = document.createElement('iframe');
                iframe.setAttribute('src', 'data:image/svg+xml;utf8,' + encodeURIComponent(result.html));
                iframe.setAttribute('width', '100%');
                iframe.setAttribute('height', '500px');
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('style', 'border: none;');
                iframe.setAttribute('id', 'iframe-svg');
                
                //show the svg in the div
                var reporte = document.getElementById('reporte');
                reporte.innerHTML = '';
                reporte.appendChild(iframe);

                var svg = document.getElementsByTagName('svg')[0];
                svg.setAttribute('viewBox', '0 0 1000 1000');
                svg.setAttribute('width', '100%');
                svg.setAttribute('height', '100%');
                svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
                
            }
        } catch (err) {
            console.error(err);
        }
}

async function getReporteSimbolos(){
    try {
        const response = await fetch("http://localhost:3003/enviar/simbolos", {
          method: 'GET',
          headers: {}
        });
        var reporte = document.getElementById('reporte');
        if (response.ok) {
          const result = await response.json();
          console.log(result.html);
            
            reporte.innerHTML = result.html;
            RErrores = result.html;
        }else{
           
            reporte.innerHTML = RErrores;
        }
      } catch (err) {
        console.error(err);
      }
}




const Home = () => {
    return (
        <>
        <div>
        <h1>Reportes</h1>
        <br />
        <br />
        </div>
        <div class="botones-div">
        <button  class="Abrir" onClick={getReporteErrores} style={{backgroundColor: "#8D9EFF"}}>Reporte de errores</button>
        <button  class="Agregar" onClick={getReporteAST} style={{backgroundColor: "#BCE29E"}}>Arbol AST</button>
        <button  class="Guardar" onClick={getReporteSimbolos} style={{backgroundColor: "#F0EBCE"}}>Tabla de símbolos</button>
        </div>
        <center>
        <div id='reporte' class="reporte">
        </div>
        <br />
        <br />
        </center>
        
        
        </>
    );
    };

export default Home;
