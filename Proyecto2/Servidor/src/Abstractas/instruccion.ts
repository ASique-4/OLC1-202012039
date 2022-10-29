import { Env } from "../Symbols/env";

export abstract class Instruccion{
    //atributos
    constructor(public line: number, public column: number) {
        this.line = line;
        this.column = column;
    }
    
    public abstract ejecutar(Env: Env):any;
}