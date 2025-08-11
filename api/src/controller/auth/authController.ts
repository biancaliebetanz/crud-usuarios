import { Router } from "express";
import jwt from 'jsonwebtoken';
import { loginUsuario } from "../../repository/usuarios/loginUsuario";

const server = Router();

server.post('/v1/auth', async (req, resp) => {
  try {
    const {email, senha} = req.body;
    const [usuario] = await loginUsuario({ email, senha });
    if (!usuario)
      resp.status(404).send({
        erro: "E-mail ou senha inválidos"
      })
    const token = jwt.sign(usuario, process.env.SECRET!);
    resp.send(token);
  } catch (error: any) {
    resp.status(500).send({
      erro: error.message
    })
  }
})

export default server;