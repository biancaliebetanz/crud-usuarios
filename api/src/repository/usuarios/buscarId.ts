import { Usuario } from "../../model/Usuario";
import { database } from "../connection";

export async function buscarId(id: string) {
  const comando = `
  select id_usuario, nome, nome_completo, email
  from tb_usuarios 
	  where id_usuario = ? 
    and bit_ativo = 1;`;
  const [r] = await database.query(comando, [id]);
  return r as unknown as Usuario[];
}