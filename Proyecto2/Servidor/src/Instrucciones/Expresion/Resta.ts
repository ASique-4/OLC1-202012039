import { Instruccion } from "../../Abstractas/instruccion";

export class Resta extends Instruccion {

    public contador = 0;

    constructor(
        public izquierda: Instruccion[],
        public derecha: Instruccion[],
        linea: number, columna:number) {
        super(linea,columna);
    }
    
    public ejecutar():any {

        console.log("Resta");
        console.log(this.izquierda + " - " + this.derecha);
        return this.izquierda + " - " + this.derecha;

    }

    public getNodos(instrucciones: any,nombre:string) {
        //Si es un string
        if (typeof instrucciones == "string") {
            //Instruccion sin comillas
            let instruccion = instrucciones.replace(/\"/g, "");
            let nodo = "node" + this.line + this.column + "hijo" + this.contador + "\n";
            nodo += "node" + this.line + this.column + "hijo" + this.contador + "[label=\"" + instruccion + "\"];\n";
            this.contador++;
            return "node" + this.line + this.column + nombre + " -> " + nodo;
        }else{
            
            try{
                let resultado = '';
                instrucciones.forEach((element: any) => {
                    resultado += "node" + this.line + this.column + nombre + " -> " + element.getNodo();
                }
                );
                return resultado;
              }catch{
                return "node" + this.line + this.column + nombre + " -> " + instrucciones.getNodo();
              }
        }
    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        let nodo = "node" + this.line + this.column + "[label=\"Resta\"];\n";
        let nodoDerecha = "node" + this.line + this.column + "derecha[label=\"Izquierda\"];\n";
        let nodoIzquierda = "node" + this.line + this.column + "izquierda[label=\"Derecha\"];\n";
        nodoIzquierda += this.getNodos(this.derecha,"derecha");

        nodoDerecha += this.getNodos(this.izquierda,"izquierda");
        ast += nodo + nodoDerecha + nodoIzquierda;
        ast += "node" + this.line + this.column + " -> " + "node" + this.line + this.column + "derecha;\n";
        ast += "node" + this.line + this.column + " -> " + "node" + this.line + this.column + "izquierda;\n";
        return ast;
    }
}