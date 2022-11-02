import { Instruccion } from "../Abstractas/instruccion";

export class Push extends Instruccion {

    constructor(
        public arreglo: string,
        public valor: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Push");
        console.log(this.arreglo + ".push(" + this.valor + ");");
        return this.arreglo + ".push(" + this.valor + ");";

    }
}