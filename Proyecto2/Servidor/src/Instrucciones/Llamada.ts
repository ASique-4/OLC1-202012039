import { Instruccion } from "../Abstractas/instruccion";

export class Llamada extends Instruccion {

    constructor(
        public id: string,
        public parametros: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("Llamada");
        console.log(this.id)
        console.log(this.parametros);

        if(this.parametros != null){
            console.log(this.id + "(" + (this.parametros) + ");");
            return this.id + "(" + (this.parametros) + ");";
        }else{
            console.log(this.id + "();");
            return this.id + "();";
        }
    }

    //Funcion que obtiene un arreglo de parametros y los ejecuta y retorna el resultado

    public ejecutarParam(parametros: any) {
        let resultado = "";

        parametros.forEach((element: any) => {
            resultado += element.ejecutar() + ", ";
        });
        //Elimina la ultima coma
        resultado = resultado.substring(0, resultado.length - 2);
        return resultado;
    }
}