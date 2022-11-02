import { Instruccion } from "../Abstractas/instruccion";

export class ToString extends Instruccion {

    constructor(
        public numero: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("ToString");
        console.log("toString(" + this.numero + ");");
        return "toString(" + this.numero + ");";

    }
}