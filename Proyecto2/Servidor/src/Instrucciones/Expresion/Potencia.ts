import { Instruccion } from "../../Abstractas/instruccion";


export class Potencia extends Instruccion {

    public contador = 0;

    constructor(
        public derecha: Instruccion[],
        public izquierda: Instruccion[],
        linea: number, columna:number) {
        super(linea,columna);
    }
    
    public ejecutar():any {

        console.log("Potencia");
        console.log(this.izquierda + " ^ " + this.derecha);
        return this.izquierda + " ^ " + this.derecha;

    }

    public getNodos(instrucciones: any) {
        //Si es un string
        if (typeof instrucciones == "string") {
            let nodo = "nodo" + this.line + this.column + "hijo" + this.contador + "\n";
            nodo += "nodo" + this.line + this.column + "hijo" + this.contador + "[label=\"" + instrucciones + "\"];\n";
            this.contador++;
            return nodo;
        }else{
            
            return instrucciones.getNodo();
        }
    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        let nodo = "node" + this.line + this.column + "[label=\"Potencia\"];\n";
        let nodoDerecha = "node" + this.line + this.column + "derecha[label=\"Izquierda\"];\n";
        let nodoIzquierda = "node" + this.line + this.column + "izquierda[label=\"Derecha\"];\n";
        nodoDerecha += "node" + this.line + this.column + "derecha -> " + this.getNodos(this.derecha);
        nodoIzquierda += "node" + this.line + this.column + "izquierda -> " + this.getNodos(this.izquierda);
        ast += nodo + nodoDerecha + nodoIzquierda;
        ast += "node" + this.line + this.column + " -> " + "node" + this.line + this.column + "derecha;\n";
        ast += "node" + this.line + this.column + " -> " + "node" + this.line + this.column + "izquierda;\n";
        return ast;
    }

}