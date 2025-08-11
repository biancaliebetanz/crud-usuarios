import { Usuario } from "../../model/Usuario";
import { database } from "../connection";

export async function alterarUsuario(id : string, usuario: Partial<Usuario>) {
  const comando = `
  update tb_usuarios 
	  set nome = ?,
    nome_completo = ?,
    email = ?
  where id_usuario = ?;`;
  const [r] = await database.query(comando, [
    usuario.nome,
    usuario.nome_completo,
    usuario.email,
    id
  ])
}