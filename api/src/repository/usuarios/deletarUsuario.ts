import { Usuario } from "../../model/Usuario";
import { database } from "../connection";

export async function deletarUsuario(id: string) {
  const comando = `
  update tb_usuarios 
	  set bit_ativo = 0
    where id_usuario = ?;`;
  const [r] = await database.query(comando, [id]);
}