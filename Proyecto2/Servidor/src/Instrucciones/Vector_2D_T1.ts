import { Instruccion } from "../Abstractas/instruccion";


export class Vector_2D_T1 extends Instruccion {

    constructor(
        public tipo: string,
        public variable: string,
        public tipo2: string,
        public expresion: string,
        public expresion2: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {


        console.log("Vector");
        console.log(this.tipo + " [][] " + this.variable + " = new " + this.tipo2 + "[" + this.expresion + "][" + this.expresion2 + "]");
        return this.tipo + " [][] " + this.variable + " = new " + this.tipo2 + "[" + this.expresion + "][" + this.expresion2 + "]";


    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        let nodo = "node" + this.line + this.column + "[label=\"Vector_2D_T1\"];\n";
        let nodoTipo = "node" + this.line + this.column + "tipo[label=\"" + this.tipo + "\"];\n";
        let nodoVariable = "node" + this.line + this.column + "variable[label=\"" + this.variable + "\"];\n";
        let nodoTipo2 = "node" + this.line + this.column + "tipo2[label=\"" + this.tipo2 + "\"];\n";
        let nodoExpresion = "node" + this.line + this.column + "expresion[label=\"" + this.expresion + "\"];\n";
        let nodoExpresion2 = "node" + this.line + this.column + "expresion2[label=\"" + this.expresion2 + "\"];\n";
        ast += nodo + nodoTipo + nodoVariable + nodoTipo2 + nodoExpresion + nodoExpresion2;
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "tipo;\n";
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "variable;\n";
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "tipo2;\n";
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "expresion;\n";
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "expresion2;\n";
        return ast;
    }
}