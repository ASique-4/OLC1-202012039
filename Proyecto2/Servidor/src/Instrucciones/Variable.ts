import { Instruccion } from "../Abstractas/instruccion";

export class Variable extends Instruccion {

    constructor(
        public id: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
            
            console.log("Variable");
            console.log("var " + this.id + ";");
            return "var " + this.id + ";";
    
        }

    public getNodo() {
            let ast = "node" + this.line + this.column + "\n";
            let nodo = "node" + this.line + this.column + "[label=\"Variable\"];\n";
            let nodoId = "node" + this.line + this.column + "id[label=\"" + this.id + "\"];\n";
            ast += nodo + nodoId;
            ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "id;\n";
            return ast;
        

    }
}