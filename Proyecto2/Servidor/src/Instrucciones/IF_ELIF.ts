import { Instruccion } from "../Abstractas/instruccion";

export class IF_ELIF extends Instruccion{

    constructor(
        public condicion: string,
        public instrucciones: string,
        public instrucciones2: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        
        if (this.instrucciones2 == null) {
            console.log("Sentencia");
        console.log("elif (" + this.condicion + ")\n{\n" + this.ejecutarIF(this.instrucciones) + "\n}");
        return "elif (" + this.condicion + ")\n{\n" + this.ejecutarIF(this.instrucciones) + "\n}";
        }else{
            console.log("Sentencia");
        console.log("elif (" + this.condicion + ")\n{\n" + this.ejecutarIF(this.instrucciones) + "\n} \n" + this.ejecutarIF(this.instrucciones2) );
        return "elif (" + this.condicion + ")\n{\n" + this.ejecutarIF(this.instrucciones) + "\n} \n" + this.ejecutarIF(this.instrucciones2);
        }

    }

    //Funcion que obtiene la lista de instrucciones y la ejecuta y retorna el resultado
    public ejecutarIF(instrucciones: any) {
        let resultado = "";
        instrucciones.forEach((element: any) => {
          resultado += element.ejecutar() + "\n";
        });
        return resultado;
      }
}

