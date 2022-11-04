import { Instruccion } from "../Abstractas/instruccion";

export class Round extends Instruccion {

    public contador = 0;

    constructor(
        public numero: Instruccion[],
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Round");
        console.log("round(" + this.numero + ");");
        return "round(" + this.numero + ");";

    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        ast += "node" + this.line + this.column + "[label=\"Round\"];\n";
        let nodoExpresion = "node" + this.line + this.column + "expresion[label=\"Expresion\"];\n";
        nodoExpresion +=  this.getNodos(this.numero,"expresion") + "\n";
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