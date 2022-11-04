import { Instruccion } from "../Abstractas/instruccion";
import { Parametro } from "./Parametro";

export class Run extends Instruccion {

    public contador = 0;

    constructor(
        public cadena: Instruccion[],
        public parametros: Parametro[],
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        if(this.parametros == null){
            console.log("Run");
            console.log("run " + this.cadena + "();");
            return "run " + this.cadena + "();";
        }else{
            console.log("Run");
            console.log("run " + this.cadena + "(" + this.parametros + ");");
            return "run " + this.cadena + "(" + this.parametros + ");";
        }

    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        let nodo = "node" + this.line + this.column + "[label=\"Run\"];\n";
        let nodo1 = "node" + this.line + this.column + "1[label=\"Cadena\"];\n";
        nodo1 +=  this.getNodos(this.cadena,"1") + "\n";
        ast += nodo + nodo1;
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "1;\n";
        if(this.parametros != null){
            let nodo2 = "node" + this.line + this.column + "2[label=\"Parametros\"];\n";
            nodo2 += this.getNodos(this.parametros,"2") + "\n";
            ast += nodo2;
            ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "2;\n";
        }
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