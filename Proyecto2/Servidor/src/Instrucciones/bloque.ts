import { Instruccion } from "../Abstractas/instruccion";
import { Env } from "../Symbols/env";

export class Bloque extends Instruccion {
    constructor(
        public listaInstrucciones:Array<Instruccion>,
        linea: number, columna:number) {
        super(linea,columna);
    }
    public ejecutar(myEnv: Env):any {
       
        const newEnv = new Env(myEnv);

    
        for (const instruccion of this.listaInstrucciones) {
            try {
                instruccion.ejecutar(newEnv);
            } catch (error) {
                console.log(error);
                
            }
        }
    
    }
}