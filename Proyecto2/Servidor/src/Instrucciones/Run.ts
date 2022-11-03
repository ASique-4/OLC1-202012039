import { Instruccion } from "../Abstractas/instruccion";

export class Run extends Instruccion {

    constructor(
        public cadena: string,
        public parametros: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        if(this.parametros == null){
            console.log("Run");
            console.log("run " + this.cadena + "();");
            return "run " + this.cadena + "();";
        }else{
            console.log("Run");
            console.log("run " + this.cadena + "(" + this.parametros + ");");
            return "run " + this.cadena + "(" + this.parametros + ");";
        }

    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        let nodo = "node" + this.line + this.column + "[label=\"Run\"];\n";
        let nodoCadena = "node" + this.line + this.column + "cadena[label=\"" + this.cadena + "\"];\n";
        ast += nodo + nodoCadena;
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "cadena;\n";
        return ast;
    }
}