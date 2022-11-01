import { Instruccion } from "../Abstractas/instruccion";

export class Continue extends Instruccion {
    
        constructor(
            linea: number,
            columna: number
        ) {
            super(linea, columna);
        }
    
        public ejecutar(): any {
            console.log("Continue");
            console.log("continue;");
            return "continue;";
        }
    }