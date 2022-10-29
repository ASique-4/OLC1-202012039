import { Instruccion } from "../Abstractas/instruccion";

class Ciclo extends Instruccion {
    constructor(linea: number, columna:number) {
        super(linea,columna);
    }
    public ejecutar():any {
        console.log("Encontre un ciclo");
        
    }
}