import { Instruccion } from "../Abstractas/instruccion";
import { CONDICION } from "./CONDICION";

export class Do_Until extends Instruccion {

  public contador = 0;

  constructor(
    public instrucciones: Instruccion[],
    public condicion: CONDICION,
    linea: number,
    columna: number
  ) {
    super(linea, columna);
  }

  public ejecutar(): any {
    console.log("Do_Until");
    console.log("do {\n" + this.ejecutarInst(this.instrucciones) + "\n} until (" + this.condicion + ")");
    return "do {\n" + this.ejecutarInst(this.instrucciones) + "\n} until (" + this.condicion + ")";
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
    ast += "[label=\"Do_Until\"];\n";
    let nodoInstrucciones = "nodo" + this.line + this.column + "instrucciones[label=\"Instrucciones\"];\n";
    nodoInstrucciones += "node" + this.line + this.column + "instrucciones ->" + this.getNodos(this.instrucciones) + "\n";
    ast += nodoInstrucciones;
    let nodoCondicion = "nodo" + this.line + this.column + "condicion[label=\"Condicion\"];\n";
    nodoCondicion += "node" + this.line + this.column + "condicion ->" + this.condicion.getNodo() + "\n";
    ast += nodoCondicion;
    ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "condicion;\n";
    ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "instrucciones;\n";
    return ast;
  }

  public getNodos(instrucciones: any) {
    //Si es un string
    if (typeof instrucciones == "string") {
        //Instruccion sin comillas
        let instruccion = instrucciones.replace(/\"/g, "");
        let nodo = "nodo" + this.line + this.column + "hijo" + this.contador + "\n";
        nodo += "nodo" + this.line + this.column + "hijo" + this.contador + "[label=\"" + instruccion + "\"];\n";
        this.contador++;
        return nodo;
    }else{
        
        return instrucciones.getNodo();
    }
}
}