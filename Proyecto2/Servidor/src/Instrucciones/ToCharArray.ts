import { Instruccion } from "../Abstractas/instruccion";

export class ToCharArray extends Instruccion {

    constructor(
        public cadena: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("ToCharArray");
        console.log("toCharArray(" + this.cadena + ");");
        return "toCharArray(" + this.cadena + ");";

    }
}