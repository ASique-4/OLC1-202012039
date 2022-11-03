import { Instruccion } from "../Abstractas/instruccion";

export class Round extends Instruccion {

    constructor(
        public numero: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Round");
        console.log("round(" + this.numero + ");");
        return "round(" + this.numero + ");";

    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        let nodo = "node" + this.line + this.column + "[label=\"Round\"];\n";
        let nodoNumero = "node" + this.line + this.column + "numero[label=\"" + this.numero + "\"];\n";
        ast += nodo + nodoNumero;
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "numero;\n";
        return ast;
    }
}