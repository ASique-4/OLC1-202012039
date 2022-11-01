import { Instruccion } from "../Abstractas/instruccion";

export class Break extends Instruccion {

    constructor(
        linea: number,
        columna: number
    ) {
        super(linea, columna);
    }

    public ejecutar(): any {
        console.log("Breake");
        console.log("break;");
        return "break;";
    }
}