import { Instruccion } from "../Abstractas/instruccion";

export class Case extends Instruccion {

    constructor(
        public condicion: string,
        public instrucciones: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Case");
        console.log("Case " + this.condicion + ": \n" + this.ejecutarInst(this.instrucciones) + "break;\n");
        return "Case " + this.condicion + ": \n" + this.ejecutarInst(this.instrucciones) + "break;\n";

    }

    //Funcion que obtiene un arreglo de instrucciones y las ejecuta y retorna el resultado

    public ejecutarInst(instrucciones: any) {

        let resultado = "";

        instrucciones.forEach((element: any) => {

          resultado += element.ejecutar() + "\n";

        });

        return resultado;

      }

}