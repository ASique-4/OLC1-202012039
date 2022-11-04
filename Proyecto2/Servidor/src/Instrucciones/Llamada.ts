import { Instruccion } from "../Abstractas/instruccion";
import { Parametro } from "./Parametro";

export class Llamada extends Instruccion {
    
    public contador = 0;

    constructor(
        public id: Instruccion[],
        public parametros: Parametro[],
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Llamada");
        console.log(this.id)
        console.log(this.parametros);

        if(this.parametros != null){
            console.log(this.id + "(" + (this.parametros) + ");");
            return this.id + "(" + (this.parametros) + ");";
        }else{
            console.log(this.id + "();");
            return this.id + "();";
        }
    }

    //Funcion que obtiene un arreglo de parametros y los ejecuta y retorna el resultado

    public ejecutarParam(parametros: any) {
        let resultado = "";

        parametros.forEach((element: any) => {
            resultado += element.ejecutar() + ", ";
        });
        //Elimina la ultima coma
        resultado = resultado.substring(0, resultado.length - 2);
        return resultado;
    }

    public getNodo() {
        if(this.parametros != null){
            
            let ast = "node" + this.line + this.column + "\n";
            let nodo = "node" + this.line + this.column + "[label=\"Llamada\"];\n";
            let nodo1 = "node" + this.line + this.column + "1[label=\"Id\"];\n";
            let nodo2 = "node" + this.line + this.column + "2[label=\"Parametros\"];\n";
            nodo1 +=  this.getNodos(this.id,"1");
            console.log(this.parametros);
            nodo2 += this.getNodos(this.parametros,"2");
            //Apuntar nodo a nodo1
            ast += nodo + nodo1 + nodo2;
            //Nodo apunta a nodo1 y nodo2
            ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "1;\n";
            ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "2;\n";
            return ast;
        }else{
            let ast = "node" + this.line + this.column + "\n";
            let nodo = "node" + this.line + this.column + "[label=\"Llamada\"];\n";
            let nodo1 = "node" + this.line + this.column + "1[label=\"Id\"];\n";
            nodo1 +=  this.getNodos(this.id,"1");
            //Apuntar nodo a nodo1
            ast += nodo + nodo1;
            //Nodo apunta a nodo1 y nodo2
            ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "1;\n";
            return ast;
        }
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
                    //Si es un string
                    if (typeof element == "string") {
                        //Instruccion sin comillas
                        let instruccion = element.replace(/\"/g, "");
                        let nodo = "node" + this.line + this.column + "hijo" + this.contador + "\n";
                        nodo += "node" + this.line + this.column + "hijo" + this.contador + "[label=\"" + instruccion + "\"];\n";
                        nodo += "node" + this.line + this.column + nombre + " -> " + nodo;
                        this.contador++;
                        resultado += nodo;
                    }else{
                        resultado += "node" + this.line + this.column + nombre + " -> " + element.getNodo();
                    }
                }
                );
                return resultado;
              }catch{
                return "node" + this.line + this.column + nombre + " -> " + instrucciones.getNodo();
              }
        }
    }
}