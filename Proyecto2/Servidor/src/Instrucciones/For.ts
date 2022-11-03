import { Instruccion } from "../Abstractas/instruccion";
import { Asignacion } from "./Asignacion";
import { CONDICION } from "./CONDICION";

export class For extends Instruccion {

    public contador = 0;

    constructor(
        public asignacion: Asignacion,
        public condicion: CONDICION,
        public actualizacion: Asignacion,
        public instrucciones: Instruccion[],
        linea: number,
        columna: number
    ) {
        super(linea, columna);
    }
    
    public ejecutar(): any {
        console.log("For");
        console.log("for (" + this.asignacion.ejecutar() + "; " + this.condicion + "; " + this.actualizacion.ejecutar()  + ") {\n" + this.ejecutarInst(this.instrucciones) + "\n}");
        return "for (" + this.asignacion.ejecutar()  + "; " + this.condicion + "; " + this.actualizacion.ejecutar()  + ") {\n" + this.ejecutarInst(this.instrucciones) + "\n}";
    }

    //Funcion que obtiene un arreglo de instrucciones y las ejecuta y retorna el resultado
    public ejecutarInst(instrucciones: any) {
        let resultado = "";
        instrucciones.forEach((element: any) => {
          resultado += element.ejecutar();
        });
        return resultado;
      }

      //Crea el nodo para el AST
    public getNodo(): string {
        let ast = "node" + this.line + this.column + "\n";
        ast += "[label=\"For\"];\n";
        let nodoInstrucciones = "nodo" + this.line + this.column + "instrucciones[label=\"Instrucciones\"];\n";
        nodoInstrucciones += "node" + this.line + this.column + "instrucciones ->" + this.getNodos(this.instrucciones) + "\n";
        ast += nodoInstrucciones;
        let nodoAsignacion = "nodo" + this.line + this.column + "asignacion[label=\"Asignacion\"];\n";
        nodoAsignacion += "node" + this.line + this.column + "asignacion ->" + this.asignacion.getNodo() + "\n";
        ast += nodoAsignacion;
        let nodoCondicion = "nodo" + this.line + this.column + "condicion[label=\"Condicion\"];\n";
        nodoCondicion += "node" + this.line + this.column + "condicion ->" + this.condicion.getNodo() + "\n";
        ast += nodoCondicion;
        let nodoActualizacion = "nodo" + this.line + this.column + "actualizacion[label=\"Actualizacion\"];\n";
        nodoActualizacion += "node" + this.line + this.column + "actualizacion ->" + this.actualizacion.getNodo() + "\n";
        ast += nodoActualizacion;
        ast += "node" + this.line + this.column + " -> nodo" + this.line + this.column + "asignacion;\n";
        ast += "node" + this.line + this.column + " -> nodo" + this.line + this.column + "condicion;\n";
        ast += "node" + this.line + this.column + " -> nodo" + this.line + this.column + "actualizacion;\n";
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