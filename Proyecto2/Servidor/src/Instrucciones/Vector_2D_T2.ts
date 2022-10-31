import { Instruccion } from "../Abstractas/instruccion";


export class Vector_2D_T2 extends Instruccion {

    constructor(
        public tipo: string,
        public variable: string,
        public expresion: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Vector");
        console.log(this.tipo + " [][] " + this.variable + " =  {" + this.expresion + "}");
        return this.tipo + " [][] " + this.variable + " =  {" + this.expresion + "}";

    }
}