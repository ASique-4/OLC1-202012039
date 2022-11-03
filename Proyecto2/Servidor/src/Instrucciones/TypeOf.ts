import { Instruccion } from "../Abstractas/instruccion";

export class TypeOf extends Instruccion {

    constructor(
        public cadena: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("TypeOf");
        console.log("typeof(" + this.cadena + ");");
        return "typeof(" + this.cadena + ");";

    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        let nodo = "node" + this.line + this.column + "[label=\"TypeOf\"];\n";
        let nodoCadena = "node" + this.line + this.column + "cadena[label=\"" + this.cadena + "\"];\n";
        ast += nodo + nodoCadena;
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "cadena;\n";
        return ast;
    }
}