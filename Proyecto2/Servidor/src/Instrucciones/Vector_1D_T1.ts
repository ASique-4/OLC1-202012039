import { Instruccion } from "../Abstractas/instruccion";

export class Vector_1D_T1 extends Instruccion {
    
        constructor(
            public tipo: string,
            public variable: string,
            public tipo2: string,
            public expresion: string,
            linea: number, columna:number) {
            super(linea,columna);
        }
    
        public ejecutar():any {
    
            if(this.tipo2 != null){
                console.log("Vector");
                console.log(this.tipo + " [] " + this.variable + " = new " + this.tipo2 + "[" + this.expresion + "]");
                return this.tipo + " [] " + this.variable + " = new " + this.tipo2 + "[" + this.expresion + "]";
            }else{
                console.log("Vector");
                console.log(this.tipo + " [] " + this.variable + " = toCharArray (" + this.expresion + ")");
                return this.tipo + " [] " + this.variable + " = toCharArray (" + this.expresion + ")";
            }
    
            //implementacion semantica
            //validar
        
        }
    }
