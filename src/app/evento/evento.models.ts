import { Casas } from '../casas/casas.models';

export class Evento{

  constructor(nome: string, descricao: string, quantidade: number, preco: number, data: Date,  casaId: number) {
    this.nome = nome;
    this.descricao = descricao;
    this.quantidade = quantidade;
    this.preco = preco;
    this.data = data;
    this.casaId = casaId;
  }

  id: number;
  nome: string;
  descricao: string;
  quantidade: number;
  preco: number;
  data: Date;
  casaId: number;
}
