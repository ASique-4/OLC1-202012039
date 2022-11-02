import { Request, Response } from "express";
import { Env } from "../Symbols/env";

class ApiController {
  public async funcion1(_req: Request, res: Response) {
    try {
      res.json({ msg: "hola mundo!" });
    } catch (error) {
      res.status(400).send({ msg: "error en funcion" });
    }
  }

  public async funcion2(req: Request, res: Response) {
    try{
      const parser = require("../Grammar/grammar");
      const ast = parser.parse(req.body.texto.toString());
      const env = new Env(null);
      let result = '';
      for (const instruccion of ast) {
        try {
          result += instruccion.ejecutar(env) + '\n';
        } catch (error) {
          console.log(error);
        }
      }
      res.json({ msg: result });
    }
    catch(error){
      res.status(400).send({ msg: "error en funcion" });
    }
  }

}

export const apiController = new ApiController();