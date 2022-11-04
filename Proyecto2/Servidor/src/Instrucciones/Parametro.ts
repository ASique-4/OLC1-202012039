import { Instruccion } from "../Abstractas/instruccion";

export class Parametro extends Instruccion {

    public contador = 0;
    constructor(
        public tipo: string,
        public id: string,
        linea: number,
        columna: number
    ) {
        super(linea, columna);
    }

    public ejecutar(): any {
        console.log("Parametro");
        console.log(this.tipo + " " + this.id);
        return this.tipo + " " + this.id;
    }

    public getNodo() {
        
        let ast = "node" + this.line + this.column + "\n";
        let nodo = "node" + this.line + this.column + "[label=\"Parametro\"];\n";
        let nodoTipo = "node" + this.line + this.column + "tipo[label=\"Tipo\"];\n";
        nodoTipo +=  this.getNodos(this.tipo,"tipo") + "\n";
        let nodoId = "node" + this.line + this.column + "id[label=\"Id\"];\n";
        nodoId +=  this.getNodos(this.id,"id") + "\n";
        ast += nodo + nodoTipo + nodoId;
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "tipo;\n";
        ast += "node" + this.line + this.column + " -> node" + this.line + this.column + "id;\n";
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