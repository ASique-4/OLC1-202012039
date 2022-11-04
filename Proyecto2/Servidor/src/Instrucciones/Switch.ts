import { Instruccion } from "../Abstractas/instruccion";
import { CONDICION } from "./CONDICION";
import { Default } from "./Default";

export class Switch extends Instruccion {

    public contador = 0;

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
        ast += "node" + this.line + this.column + "[label=\"Switch\"];\n";
        let nodoCondicion = "node" + this.line + this.column + "condicion[label=\""+ this.condicion +"\"];\n";
        ast += nodoCondicion;
        
        let nodoInstrucciones = "node" + this.line + this.column + "instrucciones[label=\"Instrucciones\"];\n";
        nodoInstrucciones +=  this.getNodos(this.instrucciones,"instrucciones") + "\n";
        ast += nodoInstrucciones;

        let nodoDefault = "node" + this.line + this.column + "default[label=\"Default\"];\n";
        nodoDefault += "node" + this.line + this.column + "default -> " + this.switch_default.getNodo() + "\n";
        ast += nodoDefault;
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "condicion;\n";
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "instrucciones;\n";
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "default;\n";
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