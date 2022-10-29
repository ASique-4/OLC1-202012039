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

}