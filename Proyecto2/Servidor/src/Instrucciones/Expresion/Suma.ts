import { Instruccion } from "../../Abstractas/instruccion";

export class Suma extends Instruccion {
    
    public contador = 0;

    constructor(
        public Izquierda: Instruccion[],
        public Derecha: Instruccion[],
        linea: number, columna:number) {
        super(linea,columna);
    }
    
    public ejecutar():any {

        console.log("Suma");
        console.log("suma(" + this.Izquierda + "," + this.Derecha + ");");
        return "suma(" + this.Izquierda + "," + this.Derecha + ");";

    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        let nodo = "node" + this.line + this.column + "[label=\"Suma\"];\n";
        let nodoDerecha = "node" + this.line + this.column + "derecha[label=\"Izquierda\"];\n";
        let nodoIzquierda = "node" + this.line + this.column + "izquierda[label=\"Derecha\"];\n";
        nodoDerecha += "node" + this.line + this.column + "derecha -> " + this.getNodos(this.Izquierda);
        nodoIzquierda += "node" + this.line + this.column + "izquierda -> " + this.getNodos(this.Derecha);
        ast += nodo + nodoDerecha + nodoIzquierda;
        ast += "node" + this.line + this.column + " -> " + "node" + this.line + this.column + "derecha;\n";
        ast += "node" + this.line + this.column + " -> " + "node" + this.line + this.column + "izquierda;\n";
        return ast;
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
}