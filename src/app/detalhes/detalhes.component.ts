import { Component, OnInit } from '@angular/core';
import { Detalhes } from './detalhes.models';
import { DetalhesService } from './detalhes.service';
import { Evento } from '../evento/evento.models';
import { Casas } from '../casas/casas.models';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  private urlDetalhes = 'http://localhost:8080/api/detalhes/eventos/{id}';
  det: Detalhes[];
  detalhes: Detalhes;
  eventos: Evento;
  casas: Casas;

  getDetalhesCasa() {
    this.detalhes.casaId = this.detalhes.casasId.id;
  }

  getDetalhesEvento() {
    this.detalhes.eventoId = this.detalhes.eventosId.id;
  }

  getDetalhes() {
    this.detalhesService.getDetalhes().subscribe(detalhes => this.det = detalhes);
  }

  constructor(private detalhesService: DetalhesService) { }

  ngOnInit() {
    this.getDetalhes();
  }
}
