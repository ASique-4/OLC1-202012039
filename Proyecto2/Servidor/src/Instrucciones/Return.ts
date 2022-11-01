import { Instruccion } from "../Abstractas/instruccion";

export class Return extends Instruccion {
    constructor(
        public valor: string,
        linea: number,
        columna: number
    ) {
        super(linea, columna);
    }

    public ejecutar(): any {
        console.log("Return");
        console.log("return " + this.valor + ";");
        return "return " + this.valor + ";";
    }
}