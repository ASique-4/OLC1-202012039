import { Instruccion } from "../Abstractas/instruccion";
import { CONDICION } from "./CONDICION";
import { Default } from "./Default";

export class Switch extends Instruccion {

    constructor(
        public condicion: CONDICION,
        public instrucciones: Instruccion[],
        public switch_default: Default,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Switch");
        console.log("switch (" + this.condicion + ") {\n" + this.ejecutarInst(this.instrucciones) + this.switch_default.ejecutar() + "}");
        return "switch (" + this.condicion + ")  {\n" + this.ejecutarInst(this.instrucciones) + this.switch_default.ejecutar() + "}";
    }

    //Funcion que recibe un arreglo de instrucciones y las ejecuta y retorna el resultado
    public ejecutarInst(instrucciones: any) {
        let resultado = "";
        instrucciones.forEach((element: any) => {
          resultado += element.ejecutar();
        });
        return resultado;
      }

    public getNodo() {
      let ast = "node" + this.line + this.column + "\n";
      ast += "[label=\"Switch\"];\n";
      ast += "node" + this.line + this.column + " -> node" + this.condicion.line + this.condicion.column + ";\n";
      ast += "node" + this.condicion.line + this.condicion.column + "[label=\"Condicion\"];\n";
      ast += "node" + this.condicion.line + this.condicion.column + " -> node" + this.condicion.line + this.condicion.column + "0;\n";
      ast += "node" + this.condicion.line + this.condicion.column + "0[label=\"" + this.condicion + "\"];\n";
      ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "0;\n";
      ast += "node" + this.line + this.column + "0[label=\"Instrucciones\"];\n";
      this.instrucciones.forEach((element: any) => {
        ast += element.getNodo();
        ast += "node" + this.line + this.column + "0 -> node" + element.line + element.column + ";\n";
      }
      );
      ast += this.switch_default.getNodo();
      ast += "node" + this.line + this.column + " -> node" + this.switch_default.line + this.switch_default.column + ";\n";
      return ast;
    }
}