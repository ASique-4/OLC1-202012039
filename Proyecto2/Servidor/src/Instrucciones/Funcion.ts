import { Instruccion } from "../Abstractas/instruccion";
import { Parametro } from "./Parametro";

export class Funcion extends Instruccion {

    public contador = 0;

    constructor(
        public identificador: Instruccion[],
        public parametros: Parametro[],
        public tipo: Instruccion[],
        public instrucciones: Instruccion[],
        linea: number,
        columna: number
    ) {
        super(linea, columna);
    }

    public ejecutar(): any {
        console.log("Funcion");
        if(this.parametros != null){
            return "function " + this.identificador + "(" + this.ejecutarParam(this.parametros) + ") : " + this.tipo + " {\n" + this.ejecutarInst(this.instrucciones) + "\n}";
        }else{
            return "function " + this.identificador + "() : " + this.tipo + " {\n" + this.ejecutarInst(this.instrucciones) + "\n}";
        }
    }

    //Funcion que obtiene un arreglo de instrucciones y las ejecuta y retorna el resultado

    public ejecutarInst(instrucciones: any) {
        let resultado = "";
        instrucciones.forEach((element: any) => {
            resultado += element.ejecutar() + "\n";
        });
        //Elimina el ultimo salto de linea
        resultado = resultado.substring(0, resultado.length - 1);
        return resultado;
    }
    //Funcion que obtiene un arreglo de parametros y los ejecuta y retorna el resultado
    public ejecutarParam(parametros: any) {
        let resultado = "";
        parametros.forEach((element: any) => {
            resultado += element.ejecutar() + ", ";
        });
        //Elimina la ultima coma y espacio
        resultado = resultado.substring(0, resultado.length - 2);
        return resultado;
    }

    public getNodo() {
        let ast = "nodo" + this.line + this.column + "\n";
        ast += "nodo" + this.line + this.column + "[label=\"Funcion\"];\n";
        let nodoId = "nodo" + this.line + this.column + "id[label=\" ID: " + this.identificador + "\"];\n";
        ast += nodoId;
        ast += "nodo" + this.line + this.column + "->" + "nodo" + this.line + this.column + "id;\n";
        let nodoTipo = "nodo" + this.line + this.column + "tipo[label=\" Tipo: " + this.tipo + "\"];\n";
        ast += nodoTipo;
        ast += "nodo" + this.line + this.column + "->" + "nodo" + this.line + this.column + "tipo;\n";
        if(this.parametros != null){
            let nodoParam = "nodo" + this.line + this.column + "param[label=\" Parametros\"];\n";
            ast += nodoParam;
            ast += "nodo" + this.line + this.column + "->" + "nodo" + this.line + this.column + "param;\n";
            this.parametros.forEach((element: any) => {
                ast += element.getNodo();
                ast += "nodo" + this.line + this.column + "param" + "->" + "nodo" + element.line + element.column + ";\n";
            });
        }
        let nodoInst = "nodo" + this.line + this.column + "inst[label=\" Instrucciones\"];\n";
        nodoInst += "nodo" + this.line + this.column + "inst ->" + this.getNodos(this.instrucciones) + "\n";
        ast += nodoInst;
        ast += "nodo" + this.line + this.column + "->" + "nodo" + this.line + this.column + "inst;\n";
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