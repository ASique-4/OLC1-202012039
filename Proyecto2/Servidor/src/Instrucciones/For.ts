import { Instruccion } from "../Abstractas/instruccion";
import { CONDICION } from "./CONDICION";

export class For extends Instruccion {

    public contador = 0;

    constructor(
        public asignacion: Instruccion[],
        public condicion: CONDICION,
        public actualizacion: Instruccion[],
        public instrucciones: Instruccion[],
        linea: number,
        columna: number
    ) {
        super(linea, columna);
    }
    
    public ejecutar(): any {
        console.log("For");
        console.log("for (" + this.asignacion + "; " + this.condicion + "; " + this.actualizacion  + ") {\n" + this.ejecutarInst(this.instrucciones) + "\n}");
        return "for (" + this.asignacion  + "; " + this.condicion + "; " + this.actualizacion  + ") {\n" + this.ejecutarInst(this.instrucciones) + "\n}";
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
        ast += "node" + this.line + this.column + "[label=\"For\"];\n";
        let nodoInstrucciones = "node" + this.line + this.column + "instrucciones[label=\"Instrucciones\"];\n";
        nodoInstrucciones += this.getNodos(this.instrucciones,"instrucciones") + "\n";
        ast += nodoInstrucciones;
        
        let nodoAsignacion = "node" + this.line + this.column + "asignacion[label=\"Asignacion\"];\n";
        nodoAsignacion += this.getNodos(this.asignacion,"asignacion") + "\n";
        ast += nodoAsignacion;
        let nodoCondicion = "node" + this.line + this.column + "condicion[label=\"Condicion\"];\n";
        nodoCondicion += "node" + this.line + this.column + "condicion ->" + this.condicion.getNodo() + "\n";
        ast += nodoCondicion;
        let nodoActualizacion = "node" + this.line + this.column + "actualizacion[label=\"Actualizacion\"];\n";
        nodoActualizacion += this.getNodos(this.actualizacion,"actualizacion") + "\n";
        ast += nodoActualizacion;
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "asignacion;\n";
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "condicion;\n";
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "actualizacion;\n";
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "instrucciones;\n";
        
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