import { Instruccion } from "../Abstractas/instruccion";

export class Vector_1D_T2 extends Instruccion {

    public contador = 0;

    constructor(
        public tipo: string,
        public variable: string,
        public expresion: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Vector");

        console.log(this.tipo + " [] " + this.variable + " =  {" + this.expresion + "}");

        return this.tipo + " [] " + this.variable + " =  {" + this.expresion + "}";

        //implementacion semantica
        //validar
    
    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        ast += "node" + this.line + this.column + "[label=\"Vector\"];\n";
        let nodoTipo = "node" + this.line + this.column + "tipo[label=\"Tipo: " + this.tipo + "\"];\n";
        ast += nodoTipo;
        let nodoVariable = "node" + this.line + this.column + "variable[label=\"Variable: " + this.variable + "\"];\n";
        ast += nodoVariable;
        let nodoExpresion = "node" + this.line + this.column + "expresion[label=\"Expresion\"];\n";
        nodoExpresion +=  this.getNodos(this.expresion,"expresion") + "\n";
        ast += nodoExpresion;
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "tipo;\n";
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "variable;\n";
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "expresion;\n";
        return ast;
    }

    public getNodos(instrucciones: any,nombre:string) {
        //Si es un string
        console.log(instrucciones);
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
                try{
                    return "node" + this.line + this.column + nombre + " -> " + instrucciones.getNodo();
                }catch{
                    let resultado = '';
                    instrucciones.forEach((element: any) => {
                        let instruccion = element.replace(/\"/g, "");
                        let nodo = "node" + this.line + this.column + "hijo" + this.contador + "\n";
                        nodo += "node" + this.line + this.column + "hijo" + this.contador + "[label=\"" + instruccion + "\"];\n";
                        this.contador++;
                        resultado += "node" + this.line + this.column + nombre + " -> " + nodo;
                       
                    }
                    );
                    return resultado;
                }
              }
        }
    }
}