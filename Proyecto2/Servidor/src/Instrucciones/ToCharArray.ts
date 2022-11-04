import { Instruccion } from "../Abstractas/instruccion";

export class ToCharArray extends Instruccion {

    public contador = 0;

    constructor(
        public cadena: Instruccion[],
        linea: number, columna:number) {
        super(linea,columna);
    }

    public ejecutar():any {

        console.log("ToCharArray");
        console.log("toCharArray(" + this.cadena + ");");
        return "toCharArray(" + this.cadena + ");";

    }

    public getNodo() {
        let ast = "node" + this.line + this.column + "\n";
        ast += "node" + this.line + this.column + "[label=\"ToCharArray\"];\n";
        let nodoCadena = "node" + this.line + this.column + "cadena[label=\" Cadena \"];\n";
        nodoCadena += this.getNodos(this.cadena,"cadena") + "\n";
        ast += nodoCadena;
        ast+= "node" + this.line + this.column + " -> " + "node" + this.line + this.column + "cadena" + "\n";
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