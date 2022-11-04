import { Instruccion } from "../Abstractas/instruccion";

export class Vector_1D_T1 extends Instruccion {
    
        public contador = 0;
    
        constructor(
            public tipo: string,
            public variable: string,
            public tipo2: string,
            public expresion: Instruccion[],
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

        public getNodo() {
            if (this.tipo2 != null){
                let ast = "node" + this.line + this.column + "\n";
                ast += "node" + this.line + this.column + "[label=\"Vector\"];\n";
                let nodoExpresion = "node" + this.line + this.column + "expresion[label=\"Expresion\"];\n";
                nodoExpresion += this.getNodos(this.expresion,"expresion") + "\n";
                ast += nodoExpresion;
                let nodoTipo = "node" + this.line + this.column + "tipo[label=\"Tipo: " + this.tipo + "\"];\n";
                ast += nodoTipo;
                ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "tipo;\n";
                let nodoTipo2 = "node" + this.line + this.column + "tipo2[label=\"New: " + this.tipo2 + "\"];\n";
                ast += nodoTipo2;
                ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "tipo2;\n";
                let nodoVariable = "node" + this.line + this.column + "variable[label=\"Variable: " + this.variable + "\"];\n";
                ast += nodoVariable;
                ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "variable;\n";
                ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "expresion;\n";
                return ast;
            }else{
                let ast = "node" + this.line + this.column + "\n";
                ast += "node" + this.line + this.column + "[label=\"Vector\"];\n";
                let nodoExpresion = "node" + this.line + this.column + "expresion[label=\"Expresion\"];\n";
                nodoExpresion += this.getNodos(this.expresion,"expresion") + "\n";
                ast += nodoExpresion;
                let nodoTipo = "node" + this.line + this.column + "tipo[label=\"Tipo: " + this.tipo + "\"];\n";
                ast += nodoTipo;
                let nodoTipo2 = "node" + this.line + this.column + "tipo2[label=\"ToCharArray\"];\n";
                ast += nodoTipo2;
                ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "tipo;\n";
                ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "tipo2;\n";
                let nodoVariable = "node" + this.line + this.column + "variable[label=\"Variable: " + this.variable + "\"];\n";
                ast += nodoVariable;
                ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "variable;\n";
                ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "expresion;\n";
                return ast;
                
            }
        }

        public getNodos(instrucciones: any,nombre:string) {
            //Si es un string
            if (typeof instrucciones == "string") {
                //Instruccion sin comillas
                let instruccion = instrucciones.replace(/\"/g, "");
                let nodo = "node" + this.line + this.column + "hijo" + this.contador + "\n";
                nodo += "node" + this.line + this.column + "hijo" + this.contador + "[label=\"" + instruccion + "\"];\n";
                this.contador++;
                return "node" + this.line + this.column + nombre + " -> " + nodo;
            }else{
                
                try{
                    let resultado = '';
                    instrucciones.forEach((element: any) => {
                        resultado += "node" + this.line + this.column + nombre + " -> " + element.getNodo();
                    }
                    );
                    return resultado;
                  }catch{
                    return "node" + this.line + this.column + nombre + " -> " + instrucciones.getNodo();
                  }
            }
        }
    }
