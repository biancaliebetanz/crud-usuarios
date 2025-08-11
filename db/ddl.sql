-- create database crud_users
use crud_users;

create table tb_usuarios (
	id_usuario bigint auto_increment PRIMARY KEY,
    nome varchar(100) not null,
    nome_completo varchar(180) default "",
    email varchar(100) not null,
    senha varchar(300) not null,
    bit_ativo smallint default 1
);    