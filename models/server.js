import express from "express";
import cors from "cors";

import { router } from "../routes/user.js";

class Server {
    constructor() {
        // configurando nuestra app con express
        this.app = express();

        // configuramos nuestro puerto
        this.PORT = process.env.PORT || 3000;

        // guardamos las rutas para hacerlas visibles y accesibles (solo es un consejo)
        this.usuariosPath = '/api/usuarios';

        // middlewares del servidores
        this.middlewares();

        // llamamos a nuestras rutas de nuestra app
        this.routes();
    }

    //metodos

    middlewares() {
        // configuramos nuestro cors
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio publico
        this.app.use( express.static('public'));
    }

    // Endpoints
    routes() {
        
        this.app.use( this.usuariosPath, router);
    }

    listen() {
        this.app.listen(this.PORT, () => {
            console.log(`Servidor corriendo en el puerto ${this.PORT}🐢`);
        })
    }
}

export {
    Server
}