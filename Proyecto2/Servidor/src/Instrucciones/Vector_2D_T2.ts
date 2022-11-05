import { Instruccion } from "../Abstractas/instruccion";


export class Vector_2D_T2 extends Instruccion {

    public contador = 0;

    constructor(
        public tipo: string,
        public variable: string,
        public expresion: Instruccion[],
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Vector");
        console.log(this.tipo + " [][] " + this.variable + " =  {" + this.expresion + "}");
        return this.tipo + " [][] " + this.variable + " =  {" + this.expresion + "}";

    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        ast += "node" + this.line + this.column + "[label=\"Vector\"];\n";
        let nodoExpresion = "node" + this.line + this.column + "expresion[label=\"Expresion\"];\n";
        nodoExpresion += this.getNodos(this.expresion,"expresion") + "\n";
        ast += nodoExpresion;
        let nodoTipo = "node" + this.line + this.column + "tipo[label=\"Tipo: " + this.tipo + "\"];\n";
        ast += nodoTipo;
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "tipo;\n";
        let nodoVariable = "node" + this.line + this.column + "variable[label=\"Variable: " + this.variable + "\"];\n";
        ast += nodoVariable;
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "variable;\n";
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "expresion;\n";
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
                return "node" + this.line + this.column + nombre + " -> " + instrucciones.getNodo();
            }catch{
                if(typeof instrucciones == "object"){
                    let nodo = "node" + this.line + this.column + "hijo" + this.contador + "\n";
                    nodo += "node" + this.line + this.column + "hijo" + this.contador + "[label=\"Lista\"];\n";
                    this.contador++;
                    let nodos = "";
                    for (let i = 0; i < instrucciones.length; i++) {
                        nodos += this.getNodos(instrucciones[i],"hijo" + this.contador);
                    }
                    return nodo + nodos;
                }else{
                    let resultado = '';
                    console.log(instrucciones);
                    instrucciones.forEach((element: any) => {
                        let instruccion = element.replace(/\"/g, "");
                        let nodo = "node" + this.line + this.column + "hijo" + this.contador + "\n";
                        nodo += "node" + this.line + this.column + "hijo" + this.contador + "[label=\"" + instruccion + "\"];\n";
                        this.contador++;
                        resultado += "node" + this.line + this.column + nombre + " -> " + nodo + "\n";
                        
                    }
                    );
                    return resultado;
                }
            }
        }
    }
}