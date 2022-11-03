import { Instruccion } from "../../Abstractas/instruccion";

export class Multiplicacion extends Instruccion {

    public contador = 0;
    
        constructor(
            public izquierda: Instruccion[],
            public derecha: Instruccion[],
            linea: number, columna:number) {
            super(linea,columna);
        }
        
        public ejecutar():any {

            console.log("Multiplicacion");
            console.log(this.ejecutarInst(this.izquierda) + " * " + this.ejecutarInst(this.derecha));
            return this.ejecutarInst(this.izquierda) + " * " + this.ejecutarInst(this.derecha);

        }

        //Funcion que obtiene lista de instrucciones y las ejecuta y retorna el resultado
        public ejecutarInst(instrucciones: any) {
            let resultado = "";
            instrucciones.forEach((element: any) => {
              resultado += element.ejecutar();
            });
            return resultado;
          }

        public getNodo() {
            let ast = "node" + this.line + this.column + "\n";
            ast += "node" + this.line + this.column + "[label=\" * \"];\n";
            let nodoIzq = "node" + this.line + this.column + "0 [label=\"izquierda\"];\n";
            nodoIzq += "node" + this.line + this.column + "0 -> " + this.getNodos(this.izquierda);
            let nodoDer = "node" + this.line + this.column + "1 [label=\"derecha\"];\n";
            nodoDer += "node" + this.line + this.column + "1 -> " + this.getNodos(this.derecha);
            ast += nodoIzq + nodoDer;
            ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "0;\n";
            ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "1;\n";
            return ast;
        }

        public getNodos(instrucciones: any) {
            //Si es un string
            if (typeof instrucciones == "string") {
                let nodo = "nodo" + this.line + this.column + "hijo" + this.contador + "\n";
            nodo += "nodo" + this.line + this.column + "hijo" + this.contador + "[label=\"" + instrucciones + "\"];\n";
            this.contador++;
            return nodo;
            }else{
                
                return instrucciones.getNodo();
            }
        }

    }