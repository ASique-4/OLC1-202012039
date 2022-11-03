import { Instruccion } from "../Abstractas/instruccion";

export class Acceso_Vector_1D extends Instruccion {

    public contador = 0;

    constructor(
        public variable: Instruccion[],
        public expresion: Instruccion[],
        linea: number, columna:number) {
        super(linea,columna);
        
    }

    public ejecutar():any {

        console.log("Vector");
        console.log(this.variable + "[" + this.expresion + "]");
        return this.variable + "[" + this.expresion + "]";

        //implementacion semantica
        //validar
    
    }

    //Create a nodo of graphviz for the AST
    public getNodo():string{
        let ast = "nodo"+this.line+this.column + "\n";
        let nodo = "nodo"+this.line+this.column+"[label=\"Acceso_Vector\"];\n";
        let nodo1 = "nodo"+this.line+this.column+"1[label=\"Variable\"];\n";
        let nodo2 = "nodo"+this.line+this.column+"2[label=\"Expresion\"];\n";
        nodo1 += "nodo"+this.line+this.column+"1->"+this.getNodos(this.variable);
        nodo2 += "nodo"+this.line+this.column+"2->"+this.getNodos(this.expresion);
        //Apuntar nodo a nodo1
        ast += nodo + nodo1 + nodo2;
        //Nodo apunta a nodo1 y nodo2
        ast += "nodo"+this.line+this.column+"->"+"nodo"+this.line+this.column+"1;\n";
        ast += "nodo"+this.line+this.column+"->"+"nodo"+this.line+this.column+"2;\n";
        return ast;
    }

    public getNodos(instrucciones: any) {
        //Si es un string
        if (typeof instrucciones == "string") {
            //Instruccion sin comillas
            let instruccion = instrucciones.replace(/\"/g, "");
            let nodo = "nodo" + this.line + this.column + "hijo" + this.contador + "\n";
            nodo += "nodo" + this.line + this.column + "hijo" + this.contador + "[label=\"" + instruccion + "\"];\n";
            this.contador++;
            return nodo;
        }else{
            
            return instrucciones.getNodo();
        }
    }
}