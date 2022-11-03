import { Instruccion } from "../Abstractas/instruccion";

export class While extends Instruccion {
  constructor(
    public condicion: string,
    public instrucciones: Instruccion[],
    linea: number,
    columna: number
  ) {
    super(linea, columna);
  }

  public ejecutar(): any {
    console.log("While");
    console.log("while (" + this.condicion + ") {\n" + this.ejecutarInst(this.instrucciones) + "\n}");
    return "while (" + this.condicion + ") {\n" + this.ejecutarInst(this.instrucciones) + "\n}";
  }

    //Funcion que obtiene un arreglo de instrucciones y las ejecuta y retorna el resultado
    public ejecutarInst(instrucciones: any) {
        let resultado = "";
        instrucciones.forEach((element: any) => {
          resultado += element.ejecutar();
        });
        return resultado;
      }

  public getNodo() {
    let ast = "node" + this.line + this.column + "\n";
    ast += "[label=\"While\"];\n";
    ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "0;\n";
    ast += "node" + this.line + this.column + "0[label=\"" + this.condicion + "\"];\n";
    ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "1;\n";
    ast += "node" + this.line + this.column + "1[label=\"Instrucciones\"];\n";
    this.instrucciones.forEach((element: any) => {
      ast += element.getNodo();
      ast += "node" + this.line + this.column + "1 -> node" + element.line + element.column + ";\n";
    }
    );
    return ast;
  }
}