import { Instruccion } from "../Abstractas/instruccion";

export class Pop extends Instruccion {

    constructor(
        public arreglo: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Pop");
        console.log(this.arreglo + ".pop();");
        return this.arreglo + ".pop();";

    }
}