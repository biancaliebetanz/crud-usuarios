import { database } from "../connection";
import { Usuario } from "../../model/Usuario";
import { sha256 } from "../../utils/sha256";

export async function criar(usuario: Usuario) {
  const comando = `
  insert into tb_usuarios(nome, nome_completo, email, senha)
    values(?, ?, ?, ?);`;
  const [r] = await database.query(comando, [
    usuario.nome,
    usuario.nome_completo,
    usuario.email,
    sha256(usuario.senha)
  ]);
};