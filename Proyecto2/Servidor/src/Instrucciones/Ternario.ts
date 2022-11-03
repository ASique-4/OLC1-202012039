import { Instruccion } from "../Abstractas/instruccion";

export class Ternario extends Instruccion {

    constructor(
        public booleano: string,
        public expresion: string,
        public expresion2: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Ternario");
        console.log(this.booleano + " ? " + this.expresion + " : " + this.expresion2);
        return this.booleano + " ? " + this.expresion + " : " + this.expresion2;
    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        let nodo = "node" + this.line + this.column + "[label=\"Ternario\"];\n";
        let nodoBooleano = "node" + this.line + this.column + "booleano[label=\"" + this.booleano + "\"];\n";
        let nodoExpresion = "node" + this.line + this.column + "expresion[label=\"" + this.expresion + "\"];\n";
        let nodoExpresion2 = "node" + this.line + this.column + "expresion2[label=\"" + this.expresion2 + "\"];\n";
        ast += nodo + nodoBooleano + nodoExpresion + nodoExpresion2;
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "booleano;\n";
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "expresion;\n";
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "expresion2;\n";
        return ast;
    }
}