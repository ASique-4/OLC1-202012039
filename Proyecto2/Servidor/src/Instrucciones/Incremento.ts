import { Instruccion } from "../Abstractas/instruccion";

export class Incremento extends Instruccion {


    constructor(
        public variable: string,
        public tipo: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
            
            console.log("Incremento");
            console.log(this.variable + this.tipo + ";");
            return this.variable + this.tipo + ";";
            
    }
}