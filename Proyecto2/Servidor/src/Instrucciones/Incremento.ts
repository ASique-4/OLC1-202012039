import { Instruccion } from "../Abstractas/instruccion";

export class Incremento extends Instruccion {

    public contador = 0;


    constructor(
        public variable: string,
        public tipo: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
            
            console.log("Incremento");
            console.log(this.variable + this.tipo + ";");
            return this.variable + this.tipo + ";";
            
    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        let nodo = "node" + this.line + this.column + "[label=\"Incremento\"];\n";
        let nodoTipo = "node" + this.line + this.column + "tipo[label=\"" + this.tipo + "\"];\n";
        let nodoVariable = "node" + this.line + this.column + "variable[label=\"" + this.variable + "\"];\n";
        ast += nodo + nodoTipo + nodoVariable;
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "tipo;\n";
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "variable;\n";
        return ast;
    }

    
}