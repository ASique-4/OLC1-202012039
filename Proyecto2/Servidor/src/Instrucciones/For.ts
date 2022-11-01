import { Instruccion } from "../Abstractas/instruccion";
import { Asignacion } from "./Asignacion";

export class For extends Instruccion {
    constructor(
        public asignacion: Asignacion,
        public condicion: string,
        public actualizacion: Asignacion,
        public instrucciones: string,
        linea: number,
        columna: number
    ) {
        super(linea, columna);
    }
    
    public ejecutar(): any {
        console.log("For");
        console.log("for (" + this.asignacion.ejecutar() + "; " + this.condicion + "; " + this.actualizacion.ejecutar()  + ") {\n" + this.ejecutarInst(this.instrucciones) + "\n}");
        return "for (" + this.asignacion.ejecutar()  + "; " + this.condicion + "; " + this.actualizacion.ejecutar()  + ") {\n" + this.ejecutarInst(this.instrucciones) + "\n}";
    }

    //Funcion que obtiene un arreglo de instrucciones y las ejecuta y retorna el resultado
    public ejecutarInst(instrucciones: any) {
        let resultado = "";
        instrucciones.forEach((element: any) => {
          resultado += element.ejecutar();
        });
        return resultado;
      }

    }