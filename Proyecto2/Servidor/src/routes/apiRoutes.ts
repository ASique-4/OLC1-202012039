import { Router } from "express";

import { apiController } from "../contollers/apiController";

class ApiRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/errores", apiController.getErrores);
    this.router.post("/", apiController.funcion2);
    this.router.get("/ast", apiController.getAST);
  }
}

const apiRoutes = new ApiRoutes();
export default apiRoutes.router;