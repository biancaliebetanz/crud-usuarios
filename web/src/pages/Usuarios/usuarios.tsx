import './usuarios.scss';

export default function Usuarios() {
  return (
    <main>
      <div className="container-usuarios">
        <h1>Usuários</h1>
      </div>
      <table>
        <thead>
          <tr>
          <td>Nome</td>
            <td>E-mail</td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>Bianca</td>
            <td>bianca@email.com.br</td>
            <td>Editar</td>
            <td>Excluir</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}