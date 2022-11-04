import { Instruccion } from "../Abstractas/instruccion";

export class Casteo extends Instruccion {
    
    public contador = 0;

    constructor(
        public tipo: string,
        public variable: Instruccion[],
        public casteo: Instruccion[],
        public expresion: Instruccion[],
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Casteo");
        if(this.variable != null){
            console.log(this.tipo + " " + this.variable + "= (" + this.casteo + ") " + this.expresion);
            return this.tipo + " " + this.variable + "= (" + this.casteo + ") " + this.expresion;
        }else{
            console.log("(" + this.casteo + ") " + this.expresion);
            return "(" + this.casteo + ") " + this.expresion;
        }

        //implementacion semantica
        //validar
    
    }

    //Create a nodo of graphviz for the AST
    public getNodo():string{
        if(this.variable != null){
            let ast = "node"+this.line+this.column + "\n";
            let nodo = "node"+this.line+this.column+"[label=\"Casteo\"];\n";
            let nodoIgual = "node"+this.line+this.column+"igual[label=\"=\"];\n";
            let nodo1 = "node"+this.line+this.column+"1[label=\"Variable\"];\n";
            let nodo2 = "node"+this.line+this.column+"2[label=\"Casteo\"];\n";
            let nodo3 = "node"+this.line+this.column+"3[label=\"Expresion\"];\n";
            
            nodo1 += this.getNodos(this.variable,"1");
            ;
            nodo2 += this.getNodos(this.casteo,"2");
            nodo3 += this.getNodos(this.expresion,"3");
            //Apuntar nodo a nodo1
            ast += nodo + nodoIgual + nodo1 + nodo2 + nodo3;
            //Nodo igual apunta a nodo1 y nodo2
            ast += "node"+this.line+this.column+"igual->"+"node"+this.line+this.column+"1;\n";
            ast += "node"+this.line+this.column+"igual->"+"node"+this.line+this.column+"2;\n";
            ast += "node"+this.line+this.column+"igual->"+"node"+this.line+this.column+"3;\n";
            //Nodo apunta a nodo igual
            ast += "node"+this.line+this.column+"->"+"node"+this.line+this.column+"igual;\n";
            return ast;
        }else{
            let ast = "node"+this.line+this.column + "\n";
            let nodo = "node"+this.line+this.column+"[label=\"Casteo\"];\n";
            let nodo1 = "node"+this.line+this.column+"1[label=\"Casteo\"];\n";
            let nodo2 = "node"+this.line+this.column+"2[label=\"Expresion\"];\n";
            
            nodo1 += this.getNodos(this.casteo,"1");
            nodo2 += this.getNodos(this.expresion,"2");
            //Apuntar nodo a nodo1
            ast += nodo + nodo1 + nodo2;
            //Nodo igual apunta a nodo1 y nodo2
            ast += "node"+this.line+this.column+"->"+"node"+this.line+this.column+"1;\n";
            ast += "node"+this.line+this.column+"->"+"node"+this.line+this.column+"2;\n";
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