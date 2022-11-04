import { Instruccion } from "../Abstractas/instruccion";

export class CONDICION extends Instruccion {

    public contador = 0;

    constructor(
        public valor1: Instruccion[],
        public condicion: Instruccion[],
        public valor2: Instruccion[],
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

       console.log("Condicion");
         console.log(this.valor1 + " " + this.condicion + " " + this.valor2);
            return this.valor1 + " " + this.condicion + " " + this.valor2;

    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        ast += "node" + this.line + this.column + "[label=\"Condicion\"];\n";
        let nodoValor1 = "node" + this.line + this.column + "valor1[label=\"Izquierda\"];\n";
        
        nodoValor1 += this.getNodos(this.valor1,"valor1") + "\n";
        let nodoCondicion = "node" + this.line + this.column + "condicion[label=\"Condicion\"];\n";
        nodoCondicion += this.getNodos(this.condicion,"condicion") + "\n";
        let nodoValor2 = "node" + this.line + this.column + "valor2[label=\"Derecha\"];\n";
        nodoValor2 += this.getNodos(this.valor2,"valor2") + "\n";
        ast += nodoValor1 + nodoCondicion + nodoValor2;
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "valor1;\n";
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "condicion;\n";
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "valor2;\n";
        
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