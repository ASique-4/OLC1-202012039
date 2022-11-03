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
        ast += "[label=\"Declaracion\"];\n";
        let nodoTipo = "nodo" + this.line + this.column + "tipo[label=\"Tipo\"];\n";
        nodoTipo += "node" + this.line + this.column + "tipo ->" + this.getNodos(this.tipo) + "\n";
        let nodoNombre = "nodo" + this.line + this.column + "nombre[label=\"Nombre\"];\n";
        nodoNombre += "node" + this.line + this.column + "nombre ->" + this.getNodos(this.nombre) + "\n";
        ast += nodoTipo + nodoNombre;
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "tipo;\n";
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "nombre;\n";
        return ast;

    }

    public getNodos(instrucciones: any) {
        //Si es un string
        if (typeof instrucciones == "string") {
            //Instruccion sin comillas
            let instruccion = instrucciones.replace(/\"/g, "");
            let nodo = "nodo" + this.line + this.column + "hijo" + this.contador + "\n";
            nodo += "nodo" + this.line + this.column + "hijo" + this.contador + "[label=\"" + instruccion + "\"];\n";
            this.contador++;
            return nodo;
        }else{
            
            return instrucciones.getNodo();
        }
    }
}