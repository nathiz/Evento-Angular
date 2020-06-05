export class Casas {

  constructor(nome: string, endereco: string, capacidade: number) {
    this.nome = nome;
    this.endereco = endereco;
    this.capacidade = capacidade;
  }

  id: number;
  nome: string;
  endereco: string;
  capacidade: number;
}
