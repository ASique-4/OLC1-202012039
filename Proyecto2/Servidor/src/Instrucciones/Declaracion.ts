import { Instruccion } from "../Abstractas/instruccion";
import { Env } from "../Symbols/env";

export class Declaracion extends Instruccion {


    constructor(
        public nombre: string,
        public tipo: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(Env: Env):any {
        console.log("Encontre una declaracion, tipo:"+this.tipo+" nombre:"+this.nombre+" lo encontre en la linea "+this.line);
        //metodo para guardar la variable, tabla de simbolos


        Env.guardar_variable(this.nombre, this.tipo);


        //guardar un metodo asi        
        //Env.guardar_funcion(this.nombre,this);


        //implementacion semantica
        //validar
    
    }
}