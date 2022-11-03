import { Instruccion } from "../Abstractas/instruccion";

export class Parametro extends Instruccion {
    constructor(
        public tipo: string,
        public id: string,
        linea: number,
        columna: number
    ) {
        super(linea, columna);
    }

    public ejecutar(): any {
        console.log("Parametro");
        console.log(this.tipo + " " + this.id);
        return this.tipo + " " + this.id;
    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        let nodo = "node" + this.line + this.column + "[label=\"Parametro\"];\n";
        let nodoTipo = "node" + this.line + this.column + "tipo[label=\"" + this.tipo + "\"];\n";
        let nodoId = "node" + this.line + this.column + "id[label=\"" + this.id + "\"];\n";
        ast += nodo + nodoTipo + nodoId;
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "tipo;\n";
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "id;\n";
        return ast;
    }
}