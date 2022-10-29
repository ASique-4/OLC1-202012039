import { Instruccion } from "../Abstractas/instruccion";

export class Impresion extends Instruccion {


    constructor(
        public expresion: string,        
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log(this.expresion);
        

        //implementacion semantica
        //validar
    
    }
}