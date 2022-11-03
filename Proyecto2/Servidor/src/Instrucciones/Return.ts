import { Instruccion } from "../Abstractas/instruccion";

export class Return extends Instruccion {
    constructor(
        public valor: string,
        linea: number,
        columna: number
    ) {
        super(linea, columna);
    }

    public ejecutar(): any {
        console.log("Return");
        console.log("return " + this.valor + ";");
        return "return " + this.valor + ";";
    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        let nodo = "node" + this.line + this.column + "[label=\"Return\"];\n";
        let nodoValor = "node" + this.line + this.column + "valor[label=\"" + this.valor + "\"];\n";
        ast += nodo + nodoValor;
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "valor;\n";
        return ast;
    }
}