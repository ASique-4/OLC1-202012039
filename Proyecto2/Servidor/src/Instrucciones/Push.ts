import { Instruccion } from "../Abstractas/instruccion";

export class Push extends Instruccion {

    constructor(
        public arreglo: string,
        public valor: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Push");
        console.log(this.arreglo + ".push(" + this.valor + ");");
        return this.arreglo + ".push(" + this.valor + ");";

    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        let nodo = "node" + this.line + this.column + "[label=\"Push\"];\n";
        let nodoArreglo = "node" + this.line + this.column + "arreglo[label=\"" + this.arreglo + "\"];\n";
        let nodoValor = "node" + this.line + this.column + "valor[label=\"" + this.valor + "\"];\n";
        ast += nodo + nodoArreglo + nodoValor;
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "arreglo;\n";
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "valor;\n";
        return ast;
    }
}