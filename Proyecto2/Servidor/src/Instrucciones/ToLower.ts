import { Instruccion } from "../Abstractas/instruccion";

export class ToLower extends Instruccion {

    constructor(
        public cadena: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("ToLower");
        console.log("toLower(" + this.cadena + ");");
        return "toLower(" + this.cadena + ");";

    }
}