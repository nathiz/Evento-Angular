import { Casas } from './../casas/casas.models';
import { Evento } from '../evento/evento.models';

export class Detalhes {
  casasId: Casas;
  eventosId: Evento;

  constructor(eventoId: number, casaId: number) {
    this.eventoId = eventoId;
    this.casaId = casaId;
  }

  id: number;
  eventoId: number;
  casaId: number;

}
