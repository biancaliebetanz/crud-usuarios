
insert into tb_usuarios(nome, nome_completo, email, senha)
  values("Pessoa", "Pessoa Aleatória", "email@gmail.com", "");

select id_usuario, nome, nome_completo, email from tb_usuarios 
	where bit_ativo = 1;

select id_usuario, nome, nome_completo, email
from tb_usuarios 
	where id_usuario = 1 
    and bit_ativo = 1;
    
select id_usuario, nome, nome_completo, email -- post
from tb_usuarios 
	where email = "biancalbtz@gmail.com"
    and bit_ativo = 1
    and senha = "";
    
update tb_usuarios set
	nome = "José", nome_completo = "José Diogo", email = "idiogo.diniz@gmail.com"
    where id_usuario = 1;
    
update tb_usuarios 
	set bit_ativo = 0
where id_usuario = 4;

update tb_usuarios 
	set senha = ""
where id_usuario = 4;
