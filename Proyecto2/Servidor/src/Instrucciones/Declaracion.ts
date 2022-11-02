import { Instruccion } from "../Abstractas/instruccion";

export class Declaracion extends Instruccion {


    constructor(
        public nombre: string,
        public tipo: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(): any {
        console.log("Declaracion");
        console.log(this.tipo + " " + this.nombre + ";");
        return this.tipo + " " + this.nombre + ";";
    }
}