import dotenv from "dotenv";

import { Server } from "./models/server.js";

// configuramos dotenv para que tome las variables de entorno
dotenv.config();

// Instanciamos nuestro servidor
const appServer = new Server();

// iniciamos el metodo listen
appServer.listen();
