import { Instruccion } from "../Abstractas/instruccion";
import { Default } from "./Default";

export class Switch extends Instruccion {

    constructor(
        public condicion: string,
        public instrucciones: string,
        public switch_default: Default,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Switch");
        console.log("switch (" + this.condicion + ") {\n" + this.ejecutarInst(this.instrucciones) + this.switch_default.ejecutar() + "}");
        return "switch (" + this.condicion + ")  {\n" + this.ejecutarInst(this.instrucciones) + this.switch_default.ejecutar() + "}";
    }

    //Funcion que recibe un arreglo de instrucciones y las ejecuta y retorna el resultado
    public ejecutarInst(instrucciones: any) {
        let resultado = "";
        instrucciones.forEach((element: any) => {
          resultado += element.ejecutar();
        });
        return resultado;
      }
}