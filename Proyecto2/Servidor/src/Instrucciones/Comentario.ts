import { Instruccion } from "../Abstractas/instruccion";
import { Env } from "../Symbols/env";

export class Comentario extends Instruccion {

    constructor(
        public comentario: string,
        public tipo: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(Env: Env):any {
        console.log("Encontre un comentario, comentario:"+this.comentario+" lo encontre en la linea "+this.line);
        //metodo para guardar la variable, tabla de simbolos
        Env.guardar_variable(this.comentario, this.tipo);
        //guardar un metodo asi        
        //Env.guardar_funcion(this.nombre,this);
        //implementacion semantica
        //validar
    }

    //Create a nodo of graphviz for the AST
    public getNodo():string{
        //This.expresion whitoout the first and last character
        let expresion = this.comentario.substring(1, this.comentario.length-1);
        let ast = "nodo"+this.line+this.column + "\n";
        let nodo = "nodo"+this.line+this.column+"[label=\"Comentario\"];\n";
        let nodo1 = "nodo"+this.line+this.column+"1[label=\"\\\" " + expresion + "\\\"\"];\n";
        //Apuntar nodo a nodo1
        ast += nodo + nodo1;
        ast += "nodo"+this.line+this.column+"->"+"nodo"+this.line+this.column+"1;\n";
        
        return ast;
    }

}