import { Instruccion } from "../Abstractas/instruccion";

export class Impresion extends Instruccion {

    public contador = 0;


    constructor(
        public tipo: string,
        public expresion: Instruccion[],        
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        if(this.tipo == "print"){
            console.log("Impresion");
            console.log("print(" + this.expresion + ");");
            return "print(" + this.expresion + ");";
        }else{
            console.log("Impresion");
            console.log("println(" + this.expresion + ");");
            return "println(" + this.expresion + ");";
        }

        //implementacion semantica
        //validar
    
    }

    //Create a nodo of graphviz for the AST
    public getNodo():string{
        if (this.tipo == "print"){
            let ast = "node" + this.line + this.column + "\n";
            ast += "node" + this.line + this.column + "[label=\"Impresion\"];\n";
            let nodoExpresion = "node" + this.line + this.column + "expresion[label=\"Expresion\"];\n";
            nodoExpresion +=  this.getNodos(this.expresion,"expresion") + "\n";
            ast += nodoExpresion;
            let nodoTipo = "node" + this.line + this.column + "tipo[label=\"Tipo: print\"];\n";
            ast += nodoTipo;
            ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "tipo;\n";
            ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "expresion;\n";
            return ast;
        }else{
            let ast = "node" + this.line + this.column + "\n";
            ast += "node" + this.line + this.column + "[label=\"Impresion\"];\n";
            let nodoExpresion = "node" + this.line + this.column + "expresion[label=\"Expresion\"];\n";
            nodoExpresion += this.getNodos(this.expresion,"expresion") + "\n";
            ast += nodoExpresion;
            let nodoTipo = "node" + this.line + this.column + "tipo[label=\"Tipo: println\"];\n";
            ast += nodoTipo;
            ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "tipo;\n";
            ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "expresion;\n";
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