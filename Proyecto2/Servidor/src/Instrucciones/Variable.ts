import { Instruccion } from "../Abstractas/instruccion";

export class Variable extends Instruccion {

    constructor(
        public id: string,
        public tipo: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
            
            console.log("Variable");
            console.log("var " + this.id + ";");
            return "var " + this.id + ";";
    
        }

    public getNodo() {
        if (this.tipo != null){
            let ast = "node" + this.line + this.column + "\n";
            let nodo = "node" + this.line + this.column + "[label=\"Variable\"];\n";
            let nodoId = "node" + this.line + this.column + "id[label=\"" + this.id + "\"];\n";
            let nodoTipo = "node" + this.line + this.column + "tipo[label=\"" + this.tipo + "\"];\n";
            ast += nodo + nodoId + nodoTipo;
            ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "id;\n";
            ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "tipo;\n";
            return ast;
        } else {
            let ast = "node" + this.line + this.column + "\n";
            let nodo = "node" + this.line + this.column + "[label=\"Variable\"];\n";
            let nodoId = "node" + this.line + this.column + "id[label=\"" + this.id + "\"];\n";
            ast += nodo + nodoId;
            ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "id;\n";
            return ast;
        }

    }
}