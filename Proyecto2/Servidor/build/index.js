"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 8080;
app.get("/", (_req, res) => {
  console.log("Hola mundo");
  res.send("Hola mundo 2 8");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
