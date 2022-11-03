import { Instruccion } from "../Abstractas/instruccion";

export class Vector_1D_T2 extends Instruccion {

    constructor(
        public tipo: string,
        public variable: string,
        public expresion: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Vector");

        console.log(this.tipo + " [] " + this.variable + " =  {" + this.expresion + "}");

        return this.tipo + " [] " + this.variable + " =  {" + this.expresion + "}";

        //implementacion semantica
        //validar
    
    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        let nodo = "node" + this.line + this.column + "[label=\"Vector_1D_T2\"];\n";
        let nodoTipo = "node" + this.line + this.column + "tipo[label=\"" + this.tipo + "\"];\n";
        let nodoVariable = "node" + this.line + this.column + "variable[label=\"" + this.variable + "\"];\n";
        let nodoExpresion = "node" + this.line + this.column + "expresion[label=\"" + this.expresion + "\"];\n";
        ast += nodo + nodoTipo + nodoVariable + nodoExpresion;
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "tipo;\n";
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "variable;\n";
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "expresion;\n";
        return ast;
    }
}