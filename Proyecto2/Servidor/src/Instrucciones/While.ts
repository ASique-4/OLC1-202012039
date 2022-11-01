import { Instruccion } from "../Abstractas/instruccion";

export class While extends Instruccion {
  constructor(
    public condicion: string,
    public instrucciones: string,
    linea: number,
    columna: number
  ) {
    super(linea, columna);
  }

  public ejecutar(): any {
    console.log("While");
    console.log("while (" + this.condicion + ") {\n" + this.ejecutarInst(this.instrucciones) + "\n}");
    return "while (" + this.condicion + ") {\n" + this.ejecutarInst(this.instrucciones) + "\n}";
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