import { Instruccion } from "../../Abstractas/instruccion";

export class Modulo extends Instruccion {

    public contador = 0;

    constructor(
        public valor1: Instruccion[],
        public valor2: Instruccion[],
        linea: number, columna:number) {
        super(linea,columna);
    }
    
    public ejecutar():any {

        console.log("Modulo");
        console.log(this.valor1 + " % " + this.valor2);
        return this.valor1 + " % " + this.valor2;

    }

    public getNodos(instrucciones: any) {
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
        let nodo = "node" + this.line + this.column + "[label=\"Modulo\"];\n";
        let nodoDerecha = "node" + this.line + this.column + "derecha[label=\"Izquierda\"];\n";
        let nodoIzquierda = "node" + this.line + this.column + "izquierda[label=\"Derecha\"];\n";
        nodoDerecha += "node" + this.line + this.column + "derecha -> " + this.getNodos(this.valor1);
        nodoIzquierda += "node" + this.line + this.column + "izquierda -> " + this.getNodos(this.valor2);
        ast += nodo + nodoDerecha + nodoIzquierda;
        ast += "node" + this.line + this.column + " -> " + "node" + this.line + this.column + "derecha;\n";
        ast += "node" + this.line + this.column + " -> " + "node" + this.line + this.column + "izquierda;\n";
        return ast;
    }
}