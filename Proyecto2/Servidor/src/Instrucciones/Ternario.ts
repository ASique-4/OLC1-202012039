import { Instruccion } from "../Abstractas/instruccion";

export class Ternario extends Instruccion {

    constructor(
        public booleano: string,
        public expresion: string,
        public expresion2: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Ternario");
        console.log(this.booleano + " ? " + this.expresion + " : " + this.expresion2);
        return this.booleano + " ? " + this.expresion + " : " + this.expresion2;
    }
}