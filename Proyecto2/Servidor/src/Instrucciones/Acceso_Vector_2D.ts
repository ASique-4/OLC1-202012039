import { Instruccion } from "../Abstractas/instruccion";

export class Acceso_Vector_2D extends Instruccion {

    constructor(
        public variable: string,
        public expresion: string,
        public expresion2: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Vector");
        console.log(this.variable + "[" + this.expresion + "]" + "[" + this.expresion2 + "]");
        return this.variable + "[" + this.expresion + "]" + "[" + this.expresion2 + "]";

    }
}