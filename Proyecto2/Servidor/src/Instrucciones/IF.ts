import { Instruccion } from "../Abstractas/instruccion";
import { IF_ELIF } from "./IF_ELIF";

export class IF extends Instruccion {
  constructor(
    public condicion: string,
    public instrucciones: string,
    public elif: IF_ELIF,
    linea: number,
    columna: number
  ) {
    super(linea, columna);
  }

  public ejecutar(): any {
    
    if(this.elif == null){
      console.log("Sentencia");
    console.log("if (" + this.condicion + ")\n{\n" + this.ejecutarIF(this.instrucciones) + "\n}");
    return "if (" + this.condicion + ")\n{\n" + this.ejecutarIF(this.instrucciones) + "\n}";
    }else{
      console.log("Sentencia");
    console.log("if (" + this.condicion + ")\n{\n" + this.ejecutarIF(this.instrucciones) + "\n} \n" + this.elif.ejecutar());
    return "if (" + this.condicion + ")\n{\n" + this.ejecutarIF(this.instrucciones) + "\n} \n" + this.elif.ejecutar() ;
    }
  }

  //Funcion obtiene la lista de instrucciones y la ejecuta y retorna el resultado
  public ejecutarIF(instrucciones: any) {
    let resultado = "";
    instrucciones.forEach((element: any) => {
      resultado += element.ejecutar();
    });
    return resultado;
  }
    
}
