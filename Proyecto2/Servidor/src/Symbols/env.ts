import { Instruccion } from "../Abstractas/instruccion";
import { Symbol, Symbol2 } from "./symbols";

export class Env{
    private tablaSimbolos: Map<string, Symbol>;
    private tablaSimbolos_funcion: Map<string, Symbol2>;
    private tablaSimbolos_arrays: Map<string, Symbol2>;


    constructor(public anterior: Env | null) {
        this.tablaSimbolos = new Map();
        this.tablaSimbolos_funcion = new Map();
        this.tablaSimbolos_arrays = new Map();
    }

    public guardar_variable(nombre: string, type: string){
        this.tablaSimbolos.set(nombre,new Symbol(nombre,type));
    }

    public guardar_funcion(nombre: string, type: Instruccion){
        this.tablaSimbolos_funcion.set(nombre,new Symbol2(nombre,type));
    }

    public guardar_array(nombre: string, type: Instruccion){
        this.tablaSimbolos_arrays.set(nombre,new Symbol2(nombre,type));
    }

}