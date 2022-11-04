import { Instruccion } from "../Abstractas/instruccion";

export class Ternario extends Instruccion {

    public contador = 0;

    constructor(
        public booleano: Instruccion[],
        public expresion: Instruccion[],
        public expresion2: Instruccion[],
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Ternario");
        console.log(this.booleano + " ? " + this.expresion + " : " + this.expresion2);
        return this.booleano + " ? " + this.expresion + " : " + this.expresion2;
    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        let nodo = "node" + this.line + this.column + "[label=\"Ternario\"];\n";
        let nodoBooleano = "node" + this.line + this.column + "booleano[label=\"Booleano\"];\n";
        let nodoExpresion = "node" + this.line + this.column + "expresion[label=\"Expresion\"];\n";
        let nodoExpresion2 = "node" + this.line + this.column + "expresion2[label=\"Expresion2\"];\n";
        nodoBooleano +=  this.getNodos(this.booleano,"booleano") + "\n";
        nodoExpresion +=  this.getNodos(this.expresion,"expresion") + "\n";
        nodoExpresion2 += this.getNodos(this.expresion2,"expresion2") + "\n";
        ast += nodo + nodoBooleano + nodoExpresion + nodoExpresion2;
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "booleano;\n";
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "expresion;\n";
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "expresion2;\n";
        
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

    
