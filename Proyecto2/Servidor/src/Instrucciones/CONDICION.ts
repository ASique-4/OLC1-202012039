import { Instruccion } from "../Abstractas/instruccion";

export class CONDICION extends Instruccion {

    constructor(
        public valor1: string,
        public condicion: string,
        public valor2: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

       console.log("Condicion");
         console.log(this.valor1 + " " + this.condicion + " " + this.valor2);
            return this.valor1 + " " + this.condicion + " " + this.valor2;

    }
}