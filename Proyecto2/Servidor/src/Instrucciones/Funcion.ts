import { Instruccion } from "../Abstractas/instruccion";
import { Parametro } from "./Parametro";
import { Singleton } from "../Singleton/Singleton";

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
        let s = Singleton.getInstance();
        if(this.parametros != null){
            console.log("Funcion");
            let ast = "node" + this.line + this.column + "\n";
            let nodo = "node" + this.line + this.column + "[label=\"Funcion\"];\n";
            let nodoIdentificador = "node" + this.line + this.column + "identificador[label=\"Identificador\"];\n";
            
            nodoIdentificador += this.getNodos(this.identificador,"identificador");
            let nodoParametros = "node" + this.line + this.column + "parametros[label=\"Parametros\"];\n";
            nodoParametros += this.getNodos(this.parametros,"parametros");
            let nodoTipo = "node" + this.line + this.column + "tipo[label=\"Tipo\"];\n";
            nodoTipo +=  this.getNodos(this.tipo,"tipo");
            let nodoInstrucciones = "node" + this.line + this.column + "instrucciones[label=\"Instrucciones\"];\n";
            nodoInstrucciones += this.getNodos(this.instrucciones,"instrucciones");
            ast += nodo + nodoIdentificador + nodoParametros + nodoTipo + nodoInstrucciones;
            ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "identificador;\n";
            ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "parametros;\n";
            ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "tipo;\n";
            ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "instrucciones;\n";
            try{
                s.add_symbol(this.identificador,"Funcion",this.tipo,"-",this.line.toString(),this.column.toString());
            }catch{
                
            }
            return ast;
        }else{
            let ast = "node" + this.line + this.column + "\n";
            let nodo = "node" + this.line + this.column + "[label=\"Funcion\"];\n";
            let nodoIdentificador = "node" + this.line + this.column + "identificador[label=\"Identificador\"];\n";
            nodoIdentificador += this.getNodos(this.identificador, "identificador");
            let nodoTipo = "node" + this.line + this.column + "tipo[label=\"Tipo\"];\n";
            nodoTipo += this.getNodos(this.tipo, "tipo");
            let nodoInstrucciones = "node" + this.line + this.column + "instrucciones[label=\"Instrucciones\"];\n";
            nodoInstrucciones += this.getNodos(this.instrucciones, "instrucciones");
            ast += nodo + nodoIdentificador + nodoTipo + nodoInstrucciones;
            ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "identificador;\n";
            ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "tipo;\n";
            ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "instrucciones;\n";
            try{
                s.add_symbol(this.identificador,"Funcion",this.tipo,"-",this.line.toString(),this.column.toString());
            }catch{
                console.log("Error al agregar simbolo");
            }
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