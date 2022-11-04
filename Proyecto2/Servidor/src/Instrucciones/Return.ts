import { Instruccion } from "../Abstractas/instruccion";

export class Return extends Instruccion {
    
    public contador = 0;

    constructor(
        public valor: Instruccion[],
        linea: number,
        columna: number
    ) {
        super(linea, columna);
    }

    public ejecutar(): any {
        console.log("Return");
        console.log("return " + this.valor + ";");
        return "return " + this.valor + ";";
    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        ast += "node" + this.line + this.column + "[label=\"Return\"];\n";
        let nodoExpresion = "node" + this.line + this.column + "expresion[label=\"Expresion\"];\n";
        try{
            nodoExpresion +=  this.getNodos(this.valor,"expresion") + "\n";
        }catch{
            let nodoNull = "node" + this.line + this.column + "expresionnull[label=\"null\"];\n";
            nodoExpresion += nodoNull;
            nodoExpresion += "node" + this.line + this.column + "expresion -> " + "node" + this.line + this.column + "expresionnull;\n";
        }
        ast += nodoExpresion;
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