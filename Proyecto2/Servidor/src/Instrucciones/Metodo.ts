import { Instruccion } from "../Abstractas/instruccion";
import { Parametro } from "./Parametro";

export class Metodo extends Instruccion {
    constructor(
        public id: string,
        public parametros: Parametro[],
        public instrucciones: Instruccion[],
        public tipo: string,
        linea: number,
        columna: number
    ) {
        super(linea, columna);
    }

    public ejecutar(): any {
        console.log("Metodo");
        if(this.parametros != null){
            if(this.tipo != null){
                console.log(this.id + "(" + this.ejecutarParam(this.parametros) + "): void {\n" + this.ejecutarInst(this.instrucciones) + "\n}");
                return this.id + "(" + this.ejecutarParam(this.parametros) + "): void {\n" + this.ejecutarInst(this.instrucciones) + "\n}";
            }else{
                console.log(this.id + "(" + this.ejecutarParam(this.parametros) + ") {\n" + this.ejecutarInst(this.instrucciones) + "\n}");
                return this.id + "(" + this.ejecutarParam(this.parametros) + ") {\n" + this.ejecutarInst(this.instrucciones) + "\n}";
            }
        }else{
            if(this.tipo != null){
                console.log(this.id + "(): void {\n" + this.ejecutarInst(this.instrucciones) + "\n}");
                return this.id + "(): void {\n" + this.ejecutarInst(this.instrucciones) + "\n}";
            }else{
                console.log(this.id + "() {\n" + this.ejecutarInst(this.instrucciones) + "\n}");
                return this.id + "() {\n" + this.ejecutarInst(this.instrucciones) + "\n}";
            }
        }
    }

    //Funcion que obtiene un arreglo de parametros y los ejecuta y retorna el resultado

    public ejecutarParam(parametros: any) {
        let resultado = "";

        parametros.forEach((element: any) => {
            resultado += element.ejecutar() + ", ";
        });
        //Elimina la ultima coma
        resultado = resultado.substring(0, resultado.length - 2);
        return resultado;
    }

    //Funcion que obtiene un arreglo de instrucciones y las ejecuta y retorna el resultado

    public ejecutarInst(instrucciones: any) {
        let resultado = "";

        instrucciones.forEach((element: any) => {
            resultado += element.ejecutar() + "\n";
        });
        //Elimina el ultimo salto de linea
        resultado = resultado.substring(0, resultado.length - 1);
        return resultado;
    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "[label=\"Metodo\"];\n";
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "1;\n";
        ast += "node" + this.line + this.column + "1[label=\"" + this.id + "\"];\n";
        if (this.parametros != null) {
            ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "2;\n";
            ast += "node" + this.line + this.column + "2[label=\"Parametros\"];\n";
            this.parametros.forEach((element: any) => {
                ast += element.getNodo();
                ast += "node" + this.line + this.column + "2 -> node" + element.line + element.column + ";\n";
            });
        }
        if (this.tipo != null) {
            ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "3;\n";
            ast += "node" + this.line + this.column + "3[label=\"" + this.tipo + "\"];\n";
        }
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "4;\n";
        ast += "node" + this.line + this.column + "4[label=\"Instrucciones\"];\n";
        this.instrucciones.forEach((element: any) => {
            ast += element.getNodo();
            ast += "node" + this.line + this.column + "4 -> node" + element.line + element.column + ";\n";
        }
        );
        return ast;
    }
}