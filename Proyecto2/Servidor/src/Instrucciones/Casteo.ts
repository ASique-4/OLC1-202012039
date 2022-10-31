import { Instruccion } from "../Abstractas/instruccion";

export class Casteo extends Instruccion {
    

    constructor(
        public tipo: string,
        public variable: string,
        public casteo: string,
        public expresion: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Casteo");
        if(this.variable != null){
            console.log(this.tipo + " " + this.variable + "= (" + this.casteo + ") " + this.expresion);
            return this.tipo + " " + this.variable + "= (" + this.casteo + ") " + this.expresion;
        }else{
            console.log("(" + this.casteo + ") " + this.expresion);
            return "(" + this.casteo + ") " + this.expresion;
        }

        //implementacion semantica
        //validar
    
    }
}