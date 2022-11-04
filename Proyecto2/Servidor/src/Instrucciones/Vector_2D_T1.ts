import { Instruccion } from "../Abstractas/instruccion";


export class Vector_2D_T1 extends Instruccion {

    public contador = 0;

    constructor(
        public tipo: string,
        public variable: string,
        public tipo2: string,
        public expresion: Instruccion[],
        public expresion2: Instruccion[],
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
        ast += "node" + this.line + this.column + "[label=\"Vector\"];\n";
        let nodoTipo = "node" + this.line + this.column + "tipo[label=\"Tipo: " + this.tipo + "\"];\n";
        ast += nodoTipo;
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "tipo;\n";
        let nodoVariable = "node" + this.line + this.column + "variable[label=\"Variable: " + this.variable + "\"];\n";
        ast += nodoVariable;
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "variable;\n";
        let nodoTipo2 = "node" + this.line + this.column + "tipo2[label=\"Tipo: " + this.tipo2 + "\"];\n";
        ast += nodoTipo2;
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "tipo2;\n";
        let nodoExpresion = "node" + this.line + this.column + "expresion[label=\"Expresion\"];\n";
        nodoExpresion += this.getNodos(this.expresion,"expresion");
        ast += nodoExpresion;
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "expresion;\n";
        let nodoExpresion2 = "node" + this.line + this.column + "expresion2[label=\"Expresion\"];\n";
        nodoExpresion2 +=  this.getNodos(this.expresion2,"expresion2") + "\n";
        ast += nodoExpresion2;
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "expresion2;\n";
        return ast;
    }

    public getNodos(instrucciones: any,nombre:string) {
        //Si es un string
        if (typeof instrucciones == "string") {
            //Instruccion sin comillas
            let instruccion = instrucciones.replace(/\"/g, "");
            let nodo = "node" + this.line + this.column + "hijo" + this.contador + "\n";
            nodo += "node" + this.line + this.column + "hijo" + this.contador + "[label=\"" + instruccion + "\"];\n";
            this.contador++;
            return "node" + this.line + this.column + nombre + " -> " + nodo;
        }else{
            
            try{
                let resultado = '';
                instrucciones.forEach((element: any) => {
                    resultado += "node" + this.line + this.column + nombre + " -> " + element.getNodo();
                }
                );
                return resultado;
              }catch{
                return "node" + this.line + this.column + nombre + " -> " + instrucciones.getNodo();
              }
        }
    }
}