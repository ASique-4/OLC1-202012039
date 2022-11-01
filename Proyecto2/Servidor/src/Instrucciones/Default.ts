import { Instruccion } from "../Abstractas/instruccion";

export class Default extends Instruccion {

    constructor(
        public instrucciones: string,
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


}

    
