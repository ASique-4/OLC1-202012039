import { Instruccion } from "../Abstractas/instruccion";

export class Round extends Instruccion {

    constructor(
        public numero: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Round");
        console.log("round(" + this.numero + ");");
        return "round(" + this.numero + ");";

    }
}