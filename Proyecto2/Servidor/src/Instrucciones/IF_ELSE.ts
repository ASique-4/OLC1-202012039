import { Instruccion } from "../Abstractas/instruccion";
import { IF_ELIF } from "./IF_ELIF";

export class IF_ELSE extends Instruccion {

    constructor(
        public condicion: string,
        public instrucciones: string,
        public elif: IF_ELIF,
        public instrucciones2: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

         if(this.elif == null){
            console.log("Sentencia"); 
         console.log("if (" + this.condicion + ") {\n" + this.ejecutarIF(this.instrucciones) + "\n }else {\n" + this.ejecutarIF(this.instrucciones2) + "\n}");
            return "if (" + this.condicion + ") {\n" + this.ejecutarIF(this.instrucciones) + "\n }else {\n" + this.ejecutarIF(this.instrucciones2) + "\n}";
         }else{
            console.log("Sentencia"); 
         console.log("if (" + this.condicion + ") {\n" + this.ejecutarIF(this.instrucciones) + "\n}" + this.elif.ejecutar() + " else {\n" + this.ejecutarIF(this.instrucciones2) + "\n}");
            return "if (" + this.condicion + ") {\n" + this.ejecutarIF(this.instrucciones) + "\n}" + this.elif.ejecutar() + " else {\n" + this.ejecutarIF(this.instrucciones2) + "\n}";
         }
    }

    //Funcion que obtiene la lista de instrucciones y la ejecuta y retorna el resultado
    public ejecutarIF(instrucciones: any) {
        let resultado = "";
        instrucciones.forEach((element: any) => {
          resultado += element.ejecutar();
        });
        return resultado;
      }
}