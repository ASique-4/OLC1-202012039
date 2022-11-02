import { Instruccion } from "../Abstractas/instruccion";

export class Metodo extends Instruccion {
    constructor(
        public id: string,
        public parametros: string,
        public instrucciones: string,
        public tipo: string,
        linea: number,
        columna: number
    ) {
        super(linea, columna);
    }

    public ejecutar(): any {
        console.log("Metodo");
        if(this.parametros != null){
            if(this.tipo != null){
                console.log(this.id + "(" + this.ejecutarParam(this.parametros) + "): void {\n" + this.ejecutarInst(this.instrucciones) + "\n}");
                return this.id + "(" + this.ejecutarParam(this.parametros) + "): void {\n" + this.ejecutarInst(this.instrucciones) + "\n}";
            }else{
                console.log(this.id + "(" + this.ejecutarParam(this.parametros) + ") {\n" + this.ejecutarInst(this.instrucciones) + "\n}");
                return this.id + "(" + this.ejecutarParam(this.parametros) + ") {\n" + this.ejecutarInst(this.instrucciones) + "\n}";
            }
        }else{
            if(this.tipo != null){
                console.log(this.id + "(): void {\n" + this.ejecutarInst(this.instrucciones) + "\n}");
                return this.id + "(): void {\n" + this.ejecutarInst(this.instrucciones) + "\n}";
            }else{
                console.log(this.id + "() {\n" + this.ejecutarInst(this.instrucciones) + "\n}");
                return this.id + "() {\n" + this.ejecutarInst(this.instrucciones) + "\n}";
            }
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

    //Funcion que obtiene un arreglo de instrucciones y las ejecuta y retorna el resultado

    public ejecutarInst(instrucciones: any) {
        let resultado = "";

        instrucciones.forEach((element: any) => {
            resultado += element.ejecutar() + "\n";
        });
        //Elimina el ultimo salto de linea
        resultado = resultado.substring(0, resultado.length - 1);
        return resultado;
    }
}