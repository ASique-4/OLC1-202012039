import { Instruccion } from "../Abstractas/instruccion";
import { CONDICION } from "./CONDICION";

export class While extends Instruccion {

  public contador = 0;

  constructor(
    public condicion: CONDICION,
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
    let nodo = "node" + this.line + this.column + "[label=\"While\"];\n";
    let nodoCondicion = "node" + this.line + this.column + "condicion[label=\"Condicion\"];\n";
    nodoCondicion += "node" + this.line + this.column + "condicion -> " + this.condicion.getNodo();
    let nodoInstrucciones = "node" + this.line + this.column + "instrucciones[label=\"Instrucciones\"];\n";
    nodoInstrucciones += this.getNodos(this.instrucciones,"instrucciones");
    ast += nodo + nodoCondicion + nodoInstrucciones;
    ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "condicion;\n";
    ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "instrucciones;\n";
    return ast;
  }

  public getNodos(instrucciones: any,nombre:string) {
    //Si es un string
    if (typeof instrucciones == "string") {
        //Instruccion sin comillas
        let instruccion = instrucciones.replace(/\"/g, "");
        let nodo = "node" + this.line + this.column + "hijo" + this.contador + "\n";
        nodo += "node" + this.line + this.column + "hijo" + this.contador + "[label=\"" + instruccion + "\"];\n";
        this.contador++;
        return "node" + this.line + this.column + nombre + " -> " + nodo;
    }else{
        
        try{
            let resultado = '';
            instrucciones.forEach((element: any) => {
                resultado += "node" + this.line + this.column + nombre + " -> " + element.getNodo();
            }
            );
            return resultado;
          }catch{
            return "node" + this.line + this.column + nombre + " -> " + instrucciones.getNodo();
          }
    }
}
}