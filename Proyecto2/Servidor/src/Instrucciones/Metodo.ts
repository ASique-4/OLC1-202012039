import { Instruccion } from "../Abstractas/instruccion";
import { Parametro } from "./Parametro";

export class Metodo extends Instruccion {

    public contador = 0;

    constructor(
        public id: string,
        public parametros: Parametro[],
        public instrucciones: Instruccion[],
        public tipo: string,
        linea: number,
        columna: number
    ) {
        super(linea, columna);
    }

    public ejecutar(): any {
        console.log("Metodo");
        if(this.parametros != null){
            if(this.tipo != null){
                console.log(this.id + "(" + this.ejecutarParam(this.parametros) + "): void {\n" + this.ejecutarInst(this.instrucciones) + "\n}");
                return this.id + "(" + this.ejecutarParam(this.parametros) + "): void {\n" + this.ejecutarInst(this.instrucciones) + "\n}";
            }else{
                console.log(this.id + "(" + this.ejecutarParam(this.parametros) + ") {\n" + this.ejecutarInst(this.instrucciones) + "\n}");
                return this.id + "(" + this.ejecutarParam(this.parametros) + ") {\n" + this.ejecutarInst(this.instrucciones) + "\n}";
            }
        }else{
            if(this.tipo != null){
                console.log(this.id + "(): void {\n" + this.ejecutarInst(this.instrucciones) + "\n}");
                return this.id + "(): void {\n" + this.ejecutarInst(this.instrucciones) + "\n}";
            }else{
                console.log(this.id + "() {\n" + this.ejecutarInst(this.instrucciones) + "\n}");
                return this.id + "() {\n" + this.ejecutarInst(this.instrucciones) + "\n}";
            }
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

    public getNodo() {
        if(this.parametros != null){
            let ast = "node" + this.line + this.column + "\n";
            ast += "node" + this.line + this.column + "[label=\"Metodo\"];\n";
            let nodoId = "node" + this.line + this.column + "id[label=\"Id\"];\n";
            let nodoParam = "node" + this.line + this.column + "param[label=\"Parametros\"];\n";
            let nodoInst = "node" + this.line + this.column + "inst[label=\"Instrucciones\"];\n";
            let nodoTipo = "node" + this.line + this.column + "tipo[label=\"Tipo\"];\n";
            nodoId +=  this.getNodos(this.id,"id") + "\n";
            nodoParam += this.getNodos(this.parametros,"param") + "\n";
            nodoInst += this.getNodos(this.instrucciones,"inst") + "\n";
            nodoTipo +=  this.getNodos(this.tipo,"tipo") + "\n";
            ast += nodoId + nodoParam + nodoInst + nodoTipo;
            ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "id;\n";
            ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "param;\n";
            ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "inst;\n";
            ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "tipo;\n";
            return ast;
        }else{
            let ast = "node" + this.line + this.column + "\n";
            ast += "node" + this.line + this.column + "[label=\"Metodo\"];\n";
            let nodoId = "node" + this.line + this.column + "id[label=\"Id\"];\n";
            let nodoInst = "node" + this.line + this.column + "inst[label=\"Instrucciones\"];\n";
            let nodoTipo = "node" + this.line + this.column + "tipo[label=\"Tipo\"];\n";
            nodoId +=  this.getNodos(this.id,"id") + "\n";
            nodoInst +=  this.getNodos(this.instrucciones,"inst") + "\n";
            nodoTipo +=  this.getNodos(this.tipo,"tipo") + "\n";
            ast += nodoId + nodoInst + nodoTipo;
            ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "id;\n";
            ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "inst;\n";
            ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "tipo;\n";
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