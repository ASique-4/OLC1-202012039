import { Instruccion } from "../Abstractas/instruccion";

export class ToString extends Instruccion {

    public contador = 0;

    constructor(
        public numero: Instruccion[],
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("ToString");
        console.log("toString(" + this.numero + ");");
        return "toString(" + this.numero + ");";

    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        let nodo = "node" + this.line + this.column + "[label=\"ToString\"];\n";
        let nodoNumero = "node" + this.line + this.column + "numero[label=\"Valor\"];\n";
        nodoNumero +=this.getNodos(this.numero,"numero");
        ast += nodo + nodoNumero;
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "numero;\n";
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