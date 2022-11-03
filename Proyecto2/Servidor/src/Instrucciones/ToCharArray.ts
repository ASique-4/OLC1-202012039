import { Instruccion } from "../Abstractas/instruccion";

export class ToCharArray extends Instruccion {

    constructor(
        public cadena: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("ToCharArray");
        console.log("toCharArray(" + this.cadena + ");");
        return "toCharArray(" + this.cadena + ");";

    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        let nodo = "node" + this.line + this.column + "[label=\"ToCharArray\"];\n";
        let nodoCadena = "node" + this.line + this.column + "cadena[label=\"" + this.cadena + "\"];\n";
        ast += nodo + nodoCadena;
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "cadena;\n";
        return ast;
    }
}