import { Instruccion } from "../Abstractas/instruccion";
import { CONDICION } from "./CONDICION";

export class IF_ELIF extends Instruccion{

    public contador = 0;

    constructor(
        public condicion: CONDICION,
        public instrucciones: Instruccion[],
        public instrucciones2: Instruccion[],
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        
        if (this.instrucciones2 == null) {
            console.log("Sentencia");
        console.log("elif (" + this.condicion + ")\n{\n" + this.ejecutarIF(this.instrucciones) + "\n}");
        return "elif (" + this.condicion + ")\n{\n" + this.ejecutarIF(this.instrucciones) + "\n}";
        }else{
            console.log("Sentencia");
        console.log("elif (" + this.condicion + ")\n{\n" + this.ejecutarIF(this.instrucciones) + "\n} \n" + this.ejecutarIF(this.instrucciones2) );
        return "elif (" + this.condicion + ")\n{\n" + this.ejecutarIF(this.instrucciones) + "\n} \n" + this.ejecutarIF(this.instrucciones2);
        }

    }

    public getNodo() {
        if (this.instrucciones2 == null) {
            let ast = "node" + this.line + this.column + "\n";
            let nodo = "node" + this.line + this.column + "[label=\"IF_ELIF\"];\n";
            let nodoCondicion = "node" + this.line + this.column + "condicion[label=\"CONDICION\"];\n";
            nodoCondicion += "node" + this.line + this.column + "condicion->" + this.condicion.getNodo();
            let nodoInstrucciones = "node" + this.line + this.column + "instrucciones[label=\"Instrucciones\"];\n";
            nodoInstrucciones += "node" + this.line + this.column + "instrucciones ->" + this.getNodos(this.instrucciones);
            ast += nodo + nodoCondicion + nodoInstrucciones;
            ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "condicion;\n";
            ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "instrucciones;\n";
            return ast;
        }else{
            let ast = "node" + this.line + this.column + "\n";
            let nodo = "node" + this.line + this.column + "[label=\"IF_ELIF\"];\n";
            let nodoCondicion = "node" + this.line + this.column + "condicion[label=\"CONDICION\"];\n";
            nodoCondicion += "node" + this.line + this.column + "condicion->" + this.condicion.getNodo();
            let nodoInstrucciones = "node" + this.line + this.column + "instrucciones[label=\"Instrucciones\"];\n";
            nodoInstrucciones += "node" + this.line + this.column + "instrucciones ->" + this.getNodos(this.instrucciones);
            let nodoInstrucciones2 = "node" + this.line + this.column + "instrucciones2[label=\"Instrucciones\"];\n";
            nodoInstrucciones2 += "node" + this.line + this.column + "instrucciones2 ->" + this.getNodos(this.instrucciones2);
            ast += nodo + nodoCondicion + nodoInstrucciones + nodoInstrucciones2;
            ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "condicion;\n";
            ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "instrucciones;\n";
            ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "instrucciones2;\n";
            return ast;
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

    //Funcion que obtiene la lista de instrucciones y la ejecuta y retorna el resultado
    public ejecutarIF(instrucciones: any) {
        let resultado = "";
        instrucciones.forEach((element: any) => {
          resultado += element.ejecutar() + "\n";
        });
        return resultado;
      }
}

