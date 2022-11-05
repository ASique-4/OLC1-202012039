import { Request, Response } from "express";
import { Env } from "../Symbols/env";
import { Singleton } from "../Singleton/Singleton";

class ApiController {
  public async funcion1(_req: Request, res: Response) {
    console.log("Hello World!");
    try {
      res.json({ msg: "hola mundo!" });
    } catch (error) {
      res.status(400).send({ msg: "error en funcion" });
    }
  }

  public async funcion2(req: Request, res: Response) {
    
    const s = Singleton.getInstance();
    try{
      s.clear_error();
      s.clear_symbol();
      //Eliminar ../AST.svg
      const fs = require("fs");
      const path = require("path");
      const filePath = path.join(__dirname, "../AST.svg");
      fs.unlinkSync(filePath);
    }catch{

    }

    
    try {
      const parser = require("../Grammar/grammar.js");
      const ast = parser.parse(req.body.texto.toString());
      const env = new Env(null);
      let result = "";
      for (const instruccion of ast) {
        try {
          result += instruccion.ejecutar(env) + "\n";
        } catch (error) {
          console.log(error);
          s.add_error(error);
        }
      }

      

      res.json({ msg: result });
    } catch (error) {
      console.log(error);
      res.status(400).send({ msg: "error en funcion" });
    }
  }
  public async getErrores(_req: Request, res: Response) {
    const s = Singleton.getInstance();
    let html = `
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    ${s.get_error()}
    </div>
    `;
    res.send({html:html});
    
  }

  public async getAST(_req: Request, res: Response) {
    try{
      //Open AST.svg file
      const fs = require("fs");
      const path = require("path");
      const filePath = path.join(__dirname, "../AST.svg");
      const file = fs.readFileSync(filePath, "utf8");
      res.send({html:file});
    }catch{
      res.send({html:""});
    }
  
    
  }

  public async getSimbolos(_req: Request, res: Response) {
    
  try{
    const s = Singleton.getInstance();
    let html = `
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    ${s.get_symbol()}
    </div>
    `;
    res.send({html:html});
  }catch{
    res.send({html:""});
  }
    
  }
}





export const apiController = new ApiController();
