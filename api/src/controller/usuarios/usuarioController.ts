import { Router } from "express";
import { buscarTodos } from "../../repository/usuarios/buscarTodos";
import { buscarId } from "../../repository/usuarios/buscarId";
import { criar } from "../../repository/usuarios/criar";
import { Usuario } from "../../model/Usuario";
import { alterarUsuario } from "../../repository/usuarios/alterarUsuario";
import { deletarUsuario } from "../../repository/usuarios/deletarUsuario";
const server = Router();

server.get('/v1/usuario', async (req, resp) => {
  try {
    const usuarios = await buscarTodos();
    resp.send(usuarios);
  } catch (error: any) {
    resp.status(500).send({
      erro: error.message
    })
  }
})

server.get('/v1/usuario/:id', async (req, resp) => {
  try {
    const id = req.params.id;
    const [usuario] = await buscarId(id);
    if (!usuario)
      resp.status(404).send({
        erro: "Usuario não encontrado."
      })
    resp.send(usuario);

  } catch (error: any) {
    resp.status(500).send({
      erro: error.message
    })
  }
})

server.post('/v1/usuario', async (req, resp) => {
  try {
    const body = req.body;
    const usuario = await criar(body);
    resp.status(201).send();
  } catch (error: any) {
    resp.status(500).send({
      erro: error.message
    })
  }
})

server.put('/v1/usuario/:id', async (req, resp) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const usuario = await alterarUsuario(id, body);
    resp.status(201).send();
  } catch (error: any) {
    resp.status(500).send({
      erro: error.message
    })
  }
})

server.delete('/v1/usuario/:id', async (req, resp) => {
  try {
    const id = req.params.id;
    const usuario = await deletarUsuario(id);
    resp.status(201).send();
  } catch (error: any) {
    resp.status(500).send({
      erro: error.message
    })
  }
})

server.patch('/v1/usuario/:id/senha', async (req, resp) => {
  const id = req.params.id;
  const { senha } = req.body;
})

export default server;