import { Instruccion } from "../Abstractas/instruccion";

export class ToString extends Instruccion {

    constructor(
        public numero: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("ToString");
        console.log("toString(" + this.numero + ");");
        return "toString(" + this.numero + ");";

    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        let nodo = "node" + this.line + this.column + "[label=\"ToString\"];\n";
        let nodoNumero = "node" + this.line + this.column + "numero[label=\"" + this.numero + "\"];\n";
        ast += nodo + nodoNumero;
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "numero;\n";
        return ast;
    }
}