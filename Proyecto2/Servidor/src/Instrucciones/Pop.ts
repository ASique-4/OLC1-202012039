import { Instruccion } from "../Abstractas/instruccion";

export class Pop extends Instruccion {

    constructor(
        public arreglo: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Pop");
        console.log(this.arreglo + ".pop();");
        return this.arreglo + ".pop();";

    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        let nodo = "node" + this.line + this.column + "[label=\"Pop\"];\n";
        let nodoArreglo = "node" + this.line + this.column + "arreglo[label=\"" + this.arreglo + "\"];\n";
        ast += nodo + nodoArreglo;
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "arreglo;\n";
        return ast;
    }
}