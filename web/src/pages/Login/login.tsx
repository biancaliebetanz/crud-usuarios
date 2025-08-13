import './login.scss';
import { useState } from 'react'

export default function Login() {

type tela = "login" | "cadastro"
const [visualizar, setVisualizar] = useState<tela>("login");

  return (
    <main>
        {visualizar === "login" && (
        <div className="container-login">
          <h1>Login</h1>
          <input type="email" name="email-usuario" id="" placeholder="E-mail" />
          <input type="password" name="senha-usuario" id="" placeholder="Senha"/>
          <button className="bt-login">Entrar</button>
          <button className="trocar" onClick={()=> setVisualizar("cadastro")}>Cadastrar</button>
        </div>
      )}
      {visualizar === "cadastro" && (
      <div className="container-login">
        <h1 className="titulo">Cadastro</h1>
        <input placeholder="Nome" type="text" name="" id="" className="input-texto" />
        <input placeholder="Nome Completo" type="text" name="" id="" className="input-texto" />
        <input placeholder="E-mail" type="email" name="" id="" className="input-email" />
        <input placeholder="Insira sua senha" type="password" name="" id="" className="input-senha" />
        <input placeholder="Confirmar senha" type="password" name="" id="" className="input-senha" />
        <button className="bt-cadastro">Cadastrar</button>
          <button className="trocar" onClick={()=> setVisualizar("login")}>Login</button>
      </div>
      )}
    </main>
  )
}