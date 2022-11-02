import { Instruccion } from "../Abstractas/instruccion";

export class Run extends Instruccion {

    constructor(
        public cadena: string,
        public parametros: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        if(this.parametros == null){
            console.log("Run");
            console.log("run " + this.cadena + "();");
            return "run " + this.cadena + "();";
        }else{
            console.log("Run");
            console.log("run " + this.cadena + "(" + this.parametros + ");");
            return "run " + this.cadena + "(" + this.parametros + ");";
        }

    }
}