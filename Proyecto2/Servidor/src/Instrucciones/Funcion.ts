import { Instruccion } from "../Abstractas/instruccion";
import { Parametro } from "./Parametro";

export class Funcion extends Instruccion {
    constructor(
        public identificador: string,
        public parametros: Parametro[],
        public tipo: string,
        public instrucciones: string,
        linea: number,
        columna: number
    ) {
        super(linea, columna);
    }

    public ejecutar(): any {
        console.log("Funcion");
        console.log(this.identificador + " (" + this.ejecutarParam(this.parametros) + ") " + this.tipo + " {\n" + this.ejecutarInst(this.instrucciones) + "\n}");
        return this.identificador + " (" + this.ejecutarParam(this.parametros)  + ") " + this.tipo + " {\n" + this.ejecutarInst(this.instrucciones) + "\n}";
    }

    //Funcion que obtiene un arreglo de instrucciones y las ejecuta y retorna el resultado

    public ejecutarInst(instrucciones: any) {
        let resultado = "";
        instrucciones.forEach((element: any) => {
            resultado += element.ejecutar();
        });
        return resultado;
    }
    //Funcion que obtiene un arreglo de parametros y los ejecuta y retorna el resultado
    public ejecutarParam(parametros: any) {
        let resultado = "";
        parametros.forEach((element: any) => {
            resultado += element.ejecutar();
        });
        return resultado;
    }
     
    
}