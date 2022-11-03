import { Instruccion } from "../Abstractas/instruccion";

export class Casteo extends Instruccion {
    
    public contador = 0;

    constructor(
        public tipo: string,
        public variable: string,
        public casteo: string,
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
        let ast = "node" + this.line + this.column + "\n";
        ast += "node" + this.line + this.column + "[label=\"Casteo\"];\n";
        let nodoTipo = "node" + this.line + this.column + "tipo[label=\"Tipo\"];\n";
        let nodoVariable = "node" + this.line + this.column + "variable[label=\"Variable\"];\n";
        let nodoCasteo = "node" + this.line + this.column + "casteo[label=\"Casteo\"];\n";
        let nodoExpresion = "node" + this.line + this.column + "expresion[label=\"Expresion\"];\n";
        ast += nodoTipo + nodoVariable + nodoCasteo + nodoExpresion;
        ast += "node" + this.line + this.column + "tipo ->" + this.getNodos(this.tipo) + ";\n";
        ast += "node" + this.line + this.column + "variable ->" + this.getNodos(this.variable) + ";\n";
        ast += "node" + this.line + this.column + "casteo ->" + this.getNodos(this.casteo) + ";\n";
        ast += "node" + this.line + this.column + "expresion ->" + this.getNodos(this.expresion) + ";\n";

        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "tipo;\n";
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "variable;\n";
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "casteo;\n";
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "expresion;\n";
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