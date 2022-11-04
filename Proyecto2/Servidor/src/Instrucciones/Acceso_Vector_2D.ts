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
        let nodoExpresion = this.getNodos(this.expresion,"expresion");
        let nodoExpresion2 = this.getNodos(this.expresion2,"expresion2");
        ast += nodo + nodoVariable + nodoExpresion + nodoExpresion2;
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "variable;\n";
        ast += "node" + this.line + this.column + "->" + "nodo" + this.line + this.column + "hijo0;\n";
        ast += "node" + this.line + this.column + "->" + "nodo" + this.line + this.column + "hijo1;\n";
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