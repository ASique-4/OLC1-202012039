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
    console.log(req.method)
    console.log(req.body)
    try{
      
      const parser = require("../Grammar/grammar");
      const ast = parser.parse(req.body.texto.toString());
      const env = new Env(null);
      for (const instruccion of ast) {
        try {
          instruccion.ejecutar(env);
        } catch (error) {
          console.log(error);
        }
      }
      res.json({ msg: "Funciono - " + req.body.texto });
    }
    catch(error){
      res.status(400).send({ msg: "error en funcion" });
    }
  }

  public async funcion3(req: Request, res: Response) {
    try {
      res.json({ msg: "hola mundo 3" + req.params.nombre });
    } catch (error) {
      res.status(400).send({ msg: "error en funcion" });
    }
  }

  public async funcion4(req: Request, res: Response) {
    try {
      res.json({ msg: "hola mundo 4" + req.headers.nombre });
    } catch (error) {
      res.status(400).send({ msg: "error en funcion" });
    }
  }

  public async funcion5(req: Request, res: Response) {
    console.log(req.method)
    console.log(req.body)
    try{
      
      const parser = require("../Grammar/grammar");
      const ast = parser.parse(req.body.texto.toString());
      const env = new Env(null);
      for (const instruccion of ast) {
        try {
          instruccion.ejecutar(env);
        } catch (error) {
          console.log(error);
        }
      }
      res.json({ msg: "hola mundo 5" + req.body.texto });
    }
    catch(error){
      res.status(400).send({ msg: "error en funcion" });
    }
  }

}

export const apiController = new ApiController();