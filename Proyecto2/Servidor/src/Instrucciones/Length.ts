import { Instruccion } from "../Abstractas/instruccion";

export class Length extends Instruccion {

    constructor(
        public cadena: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Length");
        console.log("length(" + this.cadena + ");");
        return "length(" + this.cadena + ");";

    }
}