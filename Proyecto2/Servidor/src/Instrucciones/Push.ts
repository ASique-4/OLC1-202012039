import { Instruccion } from "../Abstractas/instruccion";

export class Push extends Instruccion {

    public contador = 0;

    constructor(
        public arreglo: string,
        public valor: Instruccion[],
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Push");
        console.log(this.arreglo + ".push(" + this.valor + ");");
        return this.arreglo + ".push(" + this.valor + ");";

    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        let nodo = "node" + this.line + this.column + "[label=\"Push\"];\n";
        let nodoArreglo = "node" + this.line + this.column + "arreglo[label=\"" + this.arreglo + "\"];\n";
        let nodoValor = "node" + this.line + this.column + "valor[label=\"Valor\"];\n";
        nodoValor += this.getNodos(this.valor,"valor") + "\n";
        ast += nodo + nodoArreglo + nodoValor;
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "arreglo;\n";
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "valor;\n";
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