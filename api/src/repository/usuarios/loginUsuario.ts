import { Usuario } from "../../model/Usuario";
import { sha256 } from "../../utils/sha256";
import { database } from "../connection";

export async function loginUsuario(usuario: Partial<Usuario>) {
  console.log(sha256(usuario.senha));
  const comando = `
  select id_usuario, nome, nome_completo, email -- post
  from tb_usuarios 
	  where email = ?
    and bit_ativo = 1
    and senha = ?;`;
  const [r] = await database.query(comando, [
    usuario.email,
    sha256(usuario.senha)
  ]);
  return r as unknown as Usuario[];
}