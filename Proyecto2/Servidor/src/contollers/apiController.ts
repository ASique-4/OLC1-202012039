import { Request, Response } from "express";
import { Env } from "../Symbols/env";
import { Singleton } from "../Singleton/Singleton";

class ApiController {
  public async funcion1(_req: Request, res: Response) {
    try {
      res.json({ msg: "hola mundo!" });
    } catch (error) {
      res.status(400).send({ msg: "error en funcion" });
    }
  }

  public async funcion2(req: Request, res: Response) {
    const s = Singleton.getInstance();
    s.clear_error();
    try {
      const parser = require("../Grammar/grammar");
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
      console.log("hola");
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
    //Open AST.svg file
    const fs = require("fs");
    const path = require("path");
    const filePath = path.join(__dirname, "../AST.svg");
    const file = fs.readFileSync(filePath, "utf8");
    res.send({html:file});
  
    
  }
}





export const apiController = new ApiController();
