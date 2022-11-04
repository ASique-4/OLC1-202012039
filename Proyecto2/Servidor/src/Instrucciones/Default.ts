import { Instruccion } from "../Abstractas/instruccion";

export class Default extends Instruccion {

    public contador = 0;

    constructor(
        public instrucciones: Instruccion[],
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Default");
        console.log("default: \n" + this.ejecutarInst(this.instrucciones)) + "break;\n";
        return "default: \n" + this.ejecutarInst(this.instrucciones) + "break;\n";

    }
    //Funcion que obtiene un arreglo de instrucciones y las ejecuta y retorna el resultado

    public ejecutarInst(instrucciones: any) {
            
        let resultado = "";

        instrucciones.forEach((element: any) => {

        resultado += element.ejecutar() + "\n";

        });

        return resultado;

    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        ast += "node" + this.line + this.column + "[label=\"Default\"];\n";
        let nodoInstrucciones = "node" + this.line + this.column + "instrucciones[label=\"Instrucciones\"];\n";
        nodoInstrucciones += this.getNodos(this.instrucciones,"instrucciones") + "\n";
        ast += nodoInstrucciones;
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "instrucciones;\n";
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

    
