import { Instruccion } from "../Abstractas/instruccion";

export class Acceso_Vector_1D extends Instruccion {

    constructor(
        public variable: string,
        public expresion: string,
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
}