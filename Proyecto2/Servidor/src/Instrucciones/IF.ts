import { Instruccion } from "../Abstractas/instruccion";
import { CONDICION } from "./CONDICION";
import { IF_ELIF } from "./IF_ELIF";

export class IF extends Instruccion {

  public contador = 0;
  constructor(
    public condicion: CONDICION,
    public instrucciones: Instruccion[],
    public elif: IF_ELIF[],
    linea: number,
    columna: number
  ) {
    super(linea, columna);
  }

  public ejecutar(): any {
    
    if(this.elif == null){
      console.log("Sentencia");
    console.log("if (" + this.condicion.ejecutar() + ")\n{\n" + this.ejecutarIF(this.instrucciones) + "\n}");
    return "if (" + this.condicion.ejecutar() + ")\n{\n" + this.ejecutarIF(this.instrucciones) + "\n}";
    }else{
      console.log("Sentencia");
    console.log("if (" + this.condicion.ejecutar() + ")\n{\n" + this.ejecutarIF(this.instrucciones) + "\n} \n" + this.ejecutarIF(this.elif));
    return "if (" + this.condicion.ejecutar() + ")\n{\n" + this.ejecutarIF(this.instrucciones) + "\n} \n" + this.ejecutarIF(this.elif); ;
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

  public getNodo() {
    if(this.elif == null){
      let ast = "node" + this.line + this.column + "\n";
      let nodo = "node" + this.line + this.column + "[label=\"IF\"];\n";
      let nodoCondicion = "node" + this.line + this.column + "condicion[label=\" CONDICION \"];\n";
      nodoCondicion += "node" + this.line + this.column + "condicion -> " + this.condicion.getNodo();
      let nodoInstrucciones = "node" + this.line + this.column + "instrucciones[label=\"Instrucciones\"];\n";
      nodoInstrucciones += this.getNodos(this.instrucciones,"instrucciones");
      ast += nodo + nodoCondicion + nodoInstrucciones;
      ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "condicion;\n";
      ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "instrucciones;\n";
      return ast;

    }else{
      let ast = "node" + this.line + this.column + "\n";
      let nodo = "node" + this.line + this.column + "[label=\"IF\"];\n";
      let nodoCondicion = "node" + this.line + this.column + "condicion[label=\" CONDICION \"];\n";
      nodoCondicion += "node" + this.line + this.column + "condicion -> " + this.condicion.getNodo();
      let nodoInstrucciones = "node" + this.line + this.column + "instrucciones[label=\"Instrucciones\"];\n";
      nodoInstrucciones +=  this.getNodos(this.instrucciones,"instrucciones");
      let nodoElif = "node" + this.line + this.column + "elif[label=\"Elif\"];\n";
      nodoElif +=  this.getNodos(this.elif,"elif");
      ast += nodo + nodoCondicion + nodoInstrucciones + nodoElif;
      ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "condicion;\n";
      ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "instrucciones;\n";
      ast += "node" + this.line + this.column + "->" + "node" + this.line + this.column + "elif;\n";
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
