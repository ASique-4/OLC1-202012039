import { Instruccion } from "../Abstractas/instruccion";

export class Length extends Instruccion {

    public contador = 0;

    constructor(
        public cadena: Instruccion[],
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Length");
        console.log("length(" + this.cadena + ");");
        return "length(" + this.cadena + ");";

    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        let nodo = "node" + this.line + this.column + "[label=\"Length\"];\n";
        let nodo1 = "node" + this.line + this.column + "1[label=\"Cadena\"];\n";
        nodo1 += this.getNodos(this.cadena,"1") + "\n";
        ast += nodo + nodo1;
        ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "1;\n";
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