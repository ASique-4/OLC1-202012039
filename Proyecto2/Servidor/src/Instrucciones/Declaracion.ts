import { Instruccion } from "../Abstractas/instruccion";

export class Declaracion extends Instruccion {

    public contador = 0;


    constructor(
        public nombre: Instruccion[],
        public tipo: Instruccion[],
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar(): any {
        console.log("Declaracion");
        console.log(this.tipo + " " + this.nombre + ";");
        return this.tipo + " " + this.nombre + ";";
    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        ast += "node" + this.line + this.column + "[label=\"Declaracion\"];\n";
        let nodoTipo = "node" + this.line + this.column + "tipo[label=\"Tipo\"];\n";
        nodoTipo += this.getNodos(this.tipo,"tipo");
        let nodoNombre = "node" + this.line + this.column + "nombre[label=\"Nombre\"];\n";
        nodoNombre += this.getNodos(this.nombre,"nombre");
        ast += nodoTipo + nodoNombre;
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "tipo;\n";
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "nombre;\n";
        return ast;

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