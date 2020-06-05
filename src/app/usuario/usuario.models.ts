
export class Usuario {

  constructor(nome: string, sobrenome: string, email: string, telefone: string, senha: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.telefone = telefone;
    this.senha = senha;
  }

  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
  senha: string;
}
