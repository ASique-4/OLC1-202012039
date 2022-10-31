import { Instruccion } from "../Abstractas/instruccion";

export class Asignacion extends Instruccion {


    constructor(
        public tipo: string,
        public variable: string,
        public expresion: string,
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        if(this.tipo == null){
            console.log("Asignacion");
            console.log(this.variable + " = " + this.expresion);
            return this.variable + " = " + this.expresion;
        }
            
        if(this.expresion != null){
                console.log("Asignacion");
                console.log(this.tipo + " " + this.variable + "= " + this.expresion);
                return this.tipo + " " + this.variable + "= " + this.expresion;
        }else{
            console.log("Declaracion");
            console.log(this.tipo + " " + this.variable);
            return this.tipo + " " + this.variable;
        }
            
            
    
            //implementacion semantica
            //validar
        
        }
}
