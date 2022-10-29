import express from "express";
import cors from "cors";


import apiRoutes from "./routes/apiRoutes";

class Server {
    public app: express.Application;
    public port: number = 3003;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || this.port);
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes(): void {
      this.app.use("/enviar",apiRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
  }

  export const server = new Server();
  server.start()


// app.get("/", (_req, res) => {
//   res.send("Hello World!");
//   console.log("Hello World!");
// });

// app.post("/prueba", (req, res) => {
//   res.send("Hello World!");
//   textoDeEntrada = req.body.texto;
//   console.log(textoDeEntrada);
// });

// app.post("/enviar", (req, res) => {
//   //const fs = require("fs");
//     console.log(req.method)
//     console.log(req)
//     console.log(req.body)
//   try {
//     textoDeEntrada = req.body.texto;
//     console.log(req.body.texto);
//     console.log(textoDeEntrada);

//     const parser = require("./Grammar/grammar");
//     //const entrada = fs.readFileSync(textoDeEntrada);
//     const ast = parser.parse(textoDeEntrada.toString());
//     const env = new Env(null);
//     for (const instruccion of ast) {
//       try {
//         instruccion.ejecutar(env);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     //Envia json con hola mundo
//     res.json({ message: "Hello World!" });
//   } catch (error) {
//     console.log(error);
//     console.log("Error en el servidor");
//   }
// });


// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });



