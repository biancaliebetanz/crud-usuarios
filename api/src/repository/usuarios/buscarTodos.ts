import { Usuario } from "../../model/Usuario";
import { database } from "../connection";

export async function buscarTodos() {
  const comando = `
  select id_usuario, nome, nome_completo, email
  from tb_usuarios
	  where bit_ativo = 1;`;
  const [r] = await database.query(comando);
  return r as unknown as Usuario[];
}