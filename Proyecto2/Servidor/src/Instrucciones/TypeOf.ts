import { Instruccion } from "../Abstractas/instruccion";

export class TypeOf extends Instruccion {

    constructor(
        public cadena: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("TypeOf");
        console.log("typeof(" + this.cadena + ");");
        return "typeof(" + this.cadena + ");";

    }
}