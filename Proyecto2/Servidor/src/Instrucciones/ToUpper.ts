import { Instruccion } from "../Abstractas/instruccion";

export class ToUpper extends Instruccion {

    constructor(
        public cadena: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("ToUpper");
        console.log("toUpper(" + this.cadena + ");");
        return "toUpper(" + this.cadena + ");";

    }
}