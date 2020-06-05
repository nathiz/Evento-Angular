import { Usuario } from './../usuario/usuario.models';
import { Evento } from '../evento/evento.models';


export class Compra {
  eventosId: Evento;
  usuariosId: Usuario;

  constructor(eventoId: number, usuarioId: number, quantidade: number, total: number) {
    this.eventoId = eventoId;
    this.usuarioId = usuarioId;
    this.quantidade = quantidade;
    this.total = total;
  }

  id: number;
  eventoId: number;
  usuarioId: number;
  quantidade: number;
  total: number;
}
