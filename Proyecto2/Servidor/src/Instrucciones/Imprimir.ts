import { Instruccion } from "../Abstractas/instruccion";

export class Impresion extends Instruccion {


    constructor(
        public tipo: string,
        public expresion: string,        
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        if(this.tipo == "print"){
            console.log("Impresion");
            console.log("print(" + this.expresion + ");");
            return "print(" + this.expresion + ");";
        }else{
            console.log("Impresion");
            console.log("println(" + this.expresion + ");");
            return "println(" + this.expresion + ");";
        }

        //implementacion semantica
        //validar
    
    }
}