import { Instruccion } from "../Abstractas/instruccion";

export class Do_Until extends Instruccion {
  constructor(
    public instrucciones: string,
    public condicion: string,
    linea: number,
    columna: number
  ) {
    super(linea, columna);
  }

  public ejecutar(): any {
    console.log("Do_Until");
    console.log("do {\n" + this.ejecutarInst(this.instrucciones) + "\n} until (" + this.condicion + ")");
    return "do {\n" + this.ejecutarInst(this.instrucciones) + "\n} until (" + this.condicion + ")";
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