import { Instruccion } from "../Abstractas/instruccion";
import { CONDICION } from "./CONDICION";
import { IF_ELIF } from "./IF_ELIF";

export class IF_ELSE extends Instruccion {

   public contador = 0;

    constructor(
        public condicion: CONDICION,
        public instrucciones: Instruccion[],
        public elif: IF_ELIF[],
        public instrucciones2: Instruccion[],
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

         if(this.elif == null){
            console.log("Sentencia"); 
         console.log("if (" + this.condicion + ") {\n" + this.ejecutarIF(this.instrucciones) + "\n }else {\n" + this.ejecutarIF(this.instrucciones2) + "\n}");
            return "if (" + this.condicion + ") {\n" + this.ejecutarIF(this.instrucciones) + "\n }else {\n" + this.ejecutarIF(this.instrucciones2) + "\n}";
         }else{
            console.log("Sentencia"); 
         console.log("if (" + this.condicion + ") {\n" + this.ejecutarIF(this.instrucciones) + "\n}" + this.ejecutarIF(this.elif) + " else {\n" + this.ejecutarIF(this.instrucciones2) + "\n}");
            return "if (" + this.condicion + ") {\n" + this.ejecutarIF(this.instrucciones) + "\n}" + this.ejecutarIF(this.elif) + " else {\n" + this.ejecutarIF(this.instrucciones2) + "\n}";
         }
    }

    //Funcion que obtiene la lista de instrucciones y la ejecuta y retorna el resultado
    public ejecutarIF(instrucciones: any) {
        let resultado = "";
        instrucciones.forEach((element: any) => {
          resultado += element.ejecutar();
        });
        return resultado;
      }

      public getNodo() {
         if(this.elif != null){
            let ast = "node" + this.line + this.column + "\n";
            let nodo = "node" + this.line + this.column + "[label=\"IF_ELSE\"];\n";

            let nodoCondicion = "node" + this.line + this.column + "condicion[label=\"CONDICION\"];\n";
            nodoCondicion += "node" + this.line + this.column + "condicion -> " + this.condicion.getNodo() + "\n";

            let nodoInstrucciones = "node" + this.line + this.column + "instrucciones1[label=\"Instrucciones\"];\n";
            nodoInstrucciones += "node" + this.line + this.column + "instrucciones1 ->" + this.getNodos(this.instrucciones);

            let nodoInstrucciones2 = "node" + this.line + this.column + "instrucciones2[label=\"ELSE\"];\n";
            nodoInstrucciones2 += "node" + this.line + this.column + "instrucciones2 ->" + this.getNodos(this.instrucciones2);

            ast += nodo + nodoCondicion + nodoInstrucciones + nodoInstrucciones2;
            ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "condicion;\n";
            ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "instrucciones1;\n";
            ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "instrucciones2;\n";
            
            return ast;
      
         }else{
            return "node" + this.line + this.column + "[label=\"IF_ELSE\"];";
         }
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