import { response, request } from "express";

const usuariosGet = (req = request, res = response) => {

    // obtencion de los query params
    const { estado, nombre = 'No name', trabajo, page = 1, limit} = req.query;

    res.json({
        msg: "get - Hola Diomar desde controlador",
        method: "get",
        estado,
        nombre,
        trabajo,
        page,
        limit
    });
}

const usuariosPost = (req, res = response) => {
    
    const {nombre, edad} = req.body;

    console.log(nombre, edad);
    
    res.status(201).json({
        ok: true,
        msg: "post - Hola Diomar desde controlador",
        method: "post",
        nombre, 
        edad
    });
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: "put - Edición desde controlador",
        method: "put",
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        ok: true,
        msg: "patch - Hola Diomar desde Controlador",
        method: "patch"
    });
}

const usuarioDelete = (req, res = response) => {
    res.status(403).json({
        ok: true,
        msg: "delete - Hola Diomar desde controlador",
        method: "delete"
    });
}

export {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuarioDelete,
    usuariosPatch
}