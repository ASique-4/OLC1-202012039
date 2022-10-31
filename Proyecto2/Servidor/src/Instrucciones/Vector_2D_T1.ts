import { Instruccion } from "../Abstractas/instruccion";


export class Vector_2D_T1 extends Instruccion {

    constructor(
        public tipo: string,
        public variable: string,
        public tipo2: string,
        public expresion: string,
        public expresion2: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {


        console.log("Vector");
        console.log(this.tipo + " [][] " + this.variable + " = new " + this.tipo2 + "[" + this.expresion + "][" + this.expresion2 + "]");
        return this.tipo + " [][] " + this.variable + " = new " + this.tipo2 + "[" + this.expresion + "][" + this.expresion2 + "]";


    }
}