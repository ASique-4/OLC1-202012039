import { Instruccion } from "../Abstractas/instruccion";

export class Parametro extends Instruccion {
    constructor(
        public tipo: string,
        public id: string,
        linea: number,
        columna: number
    ) {
        super(linea, columna);
    }

    public ejecutar(): any {
        console.log("Parametro");
        console.log(this.tipo + " " + this.id);
        return this.tipo + " " + this.id;
    }
}