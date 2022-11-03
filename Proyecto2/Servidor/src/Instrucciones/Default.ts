import { Instruccion } from "../Abstractas/instruccion";

export class Default extends Instruccion {

    public contador = 0;

    constructor(
        public instrucciones: Instruccion[],
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Default");
        console.log("default: \n" + this.ejecutarInst(this.instrucciones)) + "break;\n";
        return "default: \n" + this.ejecutarInst(this.instrucciones) + "break;\n";

    }
    //Funcion que obtiene un arreglo de instrucciones y las ejecuta y retorna el resultado

    public ejecutarInst(instrucciones: any) {
            
        let resultado = "";

        instrucciones.forEach((element: any) => {

        resultado += element.ejecutar() + "\n";

        });

        return resultado;

    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        ast += "[label=\"Default\"];\n";
        let nodoInstrucciones = "nodo" + this.line + this.column + "instrucciones[label=\"Instrucciones\"];\n";
        nodoInstrucciones += "node" + this.line + this.column + "instrucciones ->" + this.getNodos(this.instrucciones) + "\n";
        ast += nodoInstrucciones;
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

    
