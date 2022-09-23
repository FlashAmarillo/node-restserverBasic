import { Router } from "express";

import { usuariosGet, usuariosPut, usuariosPost, usuariosPatch, usuarioDelete } from "../controllers/userController.js";

const router = Router();

router.get('/', usuariosGet)

router.post('/', usuariosPost)

// :id express crea rutas dinamicas y crea una variable en el obj request llamado params
router.put('/:id', usuariosPut)

router.patch('/', usuariosPatch)

router.delete('/', usuarioDelete)


export {
    router
}