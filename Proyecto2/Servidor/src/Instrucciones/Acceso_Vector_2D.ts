import { Instruccion } from "../Abstractas/instruccion";

export class Acceso_Vector_2D extends Instruccion {

    public contador = 0;

    constructor(
        public variable: string,
        public expresion: string,
        public expresion2: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Vector");
        console.log(this.variable + "[" + this.expresion + "]" + "[" + this.expresion2 + "]");
        return this.variable + "[" + this.expresion + "]" + "[" + this.expresion2 + "]";

    }

    public getNodo():string{
        let ast = "node" + this.line + this.column + "\n";
        let nodo = "node" + this.line + this.column + "[label=\"Acceso_Vector_2D\"];\n";
        let nodoVariable = "node" + this.line + this.column + "variable[label=\"" + this.variable + "\"];\n";
        let nodoExpresion = this.getNodos(this.expresion);
        let nodoExpresion2 = this.getNodos(this.expresion2);
        ast += nodo + nodoVariable + nodoExpresion + nodoExpresion2;
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "variable;\n";
        ast += "node" + this.line + this.column + "->" + "nodo" + this.line + this.column + "hijo0;\n";
        ast += "node" + this.line + this.column + "->" + "nodo" + this.line + this.column + "hijo1;\n";
        return ast;
    }

    public getNodos(instrucciones: any) {
        //Si es un string
        if (typeof instrucciones == "string") {
            let nodo = "nodo" + this.line + this.column + "hijo" + this.contador + "\n";
            nodo += "nodo" + this.line + this.column + "hijo" + this.contador + "[label=\"" + instrucciones + "\"];\n";
            this.contador++;
            return nodo;
        }else{
            
            return instrucciones.getNodo();
        }
    }
}