import { Instruccion } from "../Abstractas/instruccion";
import { Singleton } from "../Singleton/Singleton";
export class Asignacion extends Instruccion {

    public contador = 0;
    constructor(
        public tipo: string,
        public variable: Instruccion[],
        public expresion: Instruccion[],
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {
        console.log(this.expresion);
        if(this.tipo == null){
            console.log("Asignacion");
            console.log(this.variable + " = " + this.expresion + ";");
            return this.variable + " = " + this.expresion + ";";
        }
            
        if(this.expresion != null){
                console.log("Asignacion");
                console.log(this.tipo + " " + this.variable + "= " + this.expresion + ";");
                return this.tipo + " " + this.variable + "= " + this.expresion + ";";
        }else{
            console.log("Declaracion");
            console.log(this.tipo + " " + this.variable + ";");
            return this.tipo + " " + this.variable + ";";
        }
            
            
    
            //implementacion semantica
            //validar
        
        }

        //Create a nodo of graphviz for the AST
        public getNodo():string{
            let s = Singleton.getInstance();
            //Si variable es un arreglo
                if(this.tipo == null){
                    let ast = "node"+this.line+this.column + "as" + "\n";
                    let nodo = "node"+this.line+this.column+"as[label=\"Asignacion\"];\n";
                    let nodoIgual = "node"+this.line+this.column+"igual[label=\"=\"];\n";
                    let nodo1 = "node"+this.line+this.column+"var[label=\"Variable\"];\n";
                    let nodo2 = "node"+this.line+this.column+"expre[label=\"Expresion\"];\n";
                    
                    nodo1 += this.getNodos(this.variable,"var");
                    nodo2 += this.getNodos(this.expresion,"expre");
                    //Apuntar nodo a nodo1
                    ast += nodo + nodoIgual + nodo1 + nodo2;
                    //Nodo igual apunta a nodo1 y nodo2
                    ast += "node"+this.line+this.column+"igual->"+"node"+this.line+this.column+"var;\n";
                    ast += "node"+this.line+this.column+"igual->"+"node"+this.line+this.column+"expre;\n";
                    //Nodo apunta a nodo igual
                    ast += "node"+this.line+this.column+"as->"+"node"+this.line+this.column+"igual;\n";
                    try{
                        s.add_symbol(this.variable.toString(),"N/A","Variable","Asignacion",this.line.toString(),this.column.toString());
                    }catch{
                        console.log("Error al agregar simbolo");
                    }
                    return ast;
                }
    
                if(this.expresion != null){
                    let ast = "node"+this.line+this.column + "as" + "\n";
                    let nodo = "node"+this.line+this.column+"as[label=\"Asignacion\"];\n";
                    let nodoIgual = "node"+this.line+this.column+"igual[label=\"=\"];\n";
                    let nodo1 = "node"+this.line+this.column+"var[label=\"Variable\"];\n";
                    let nodo2 = "node"+this.line+this.column+"expre[label=\"Expresion\"];\n";
                    let nodoTipo = "node"+this.line+this.column+"tipo[label=\"Tipo\"];\n";
                    
                    nodo1 +=   this.getNodos(this.variable,"var");
                    nodo2 +=  this.getNodos(this.expresion,"expre");
                    nodoTipo +=  this.getNodos(this.tipo,"tipo");
                    //Apuntar nodo a nodo1
                    ast += nodo + nodoIgual + nodo1 + nodo2 + nodoTipo;
                    //Nodo igual apunta a nodo1 y nodo2
                    ast += "node"+this.line+this.column+"igual -> "+"node"+this.line+this.column+"tipo;\n";
                    ast += "node"+this.line+this.column+"igual -> "+"node"+this.line+this.column+"var;\n";
                    ast += "node"+this.line+this.column+"igual -> "+"node"+this.line+this.column+"expre;\n";
                    //Nodo apunta a nodo igual
                    ast += "node"+this.line+this.column+"as -> "+"node"+this.line+this.column+"igual;\n";
                    try{
                        s.add_symbol(this.variable.toString(),this.tipo,"Variable","Asignacion",this.line,this.column);
                    }catch{
                        console.log("Error al agregar simbolo");
                    }
                    return ast;
                }else{
                    let ast = "node"+this.line+this.column + "as" + "\n";
                    let nodo = "node"+this.line+this.column+"as[label=\"Declaracion\"];\n";
                    let nodo1 = "node"+this.line+this.column+"var[label=\"Variable\"];\n";
                    let nodoTipo = "node"+this.line+this.column+"tipo[label=\"Tipo\"];\n";
                    nodo1 +=  this.getNodos(this.variable, "var");
                    nodoTipo +=  this.getNodos(this.tipo, "tipo");
                    
                    //Apuntar nodo a nodo1
                    ast += nodo + nodo1 + nodoTipo;
                    //Nodo igual apunta a nodo1 y nodo2
                    ast += "node"+this.line+this.column+"tipo -> "+"node"+this.line+this.column+"var;\n";
                    //Nodo apunta a nodo igual
                    ast += "node"+this.line+this.column+"as -> "+"node"+this.line+this.column+"tipo;\n";
                    try{
                        s.add_symbol(this.variable.toString(),this.tipo,"Variable","Asignacion",this.line,this.column);
                    }catch{
                        console.log("Error al agregar simbolo");
                    }
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
