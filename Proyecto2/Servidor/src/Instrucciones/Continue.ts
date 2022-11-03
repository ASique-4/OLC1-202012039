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

        public getNodo() {
            let ast = "node" + this.line + this.column + "\n";
            let nodo = "node" + this.line + this.column + "[label=\"Continue\"];\n";
            ast += nodo;
            return ast;
        }
    }