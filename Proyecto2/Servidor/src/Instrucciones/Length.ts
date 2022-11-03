import { Instruccion } from "../Abstractas/instruccion";

export class Length extends Instruccion {

    public contador = 0;

    constructor(
        public cadena: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Length");
        console.log("length(" + this.cadena + ");");
        return "length(" + this.cadena + ");";

    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        let nodo = "node" + this.line + this.column + "[label=\"Length\"];\n";
        let nodoCadena = "node" + this.line + this.column + "cadena[label=\"" + this.cadena + "\"];\n";
        ast += nodo + nodoCadena;
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "cadena;\n";
        return ast;
    }
}