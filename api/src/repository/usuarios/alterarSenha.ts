import { Usuario } from "../../model/Usuario";
import { database } from "../connection";
import { sha256 } from "../../utils/sha256";

export async function alterarSenha(usuario: Usuario) {
  const comando = `
  update tb_usuarios 
	  set senha = ?
  where id_usuario = ?;`;
  const [r] = await database.query(comando, [
    sha256(usuario.senha),
    usuario.id_usuario
  ])
}