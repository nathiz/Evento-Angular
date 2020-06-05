import { EventoService } from './evento.service';
import { Evento } from './evento.models';
import { Component, OnInit } from '@angular/core';
import { Casas } from 'src/app/casas/casas.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  private urlEvento = 'http://localhost:8080/api/eventos';
  eventos: Evento[];
  casas: Casas;
  event: Evento;
  casasId: Casas;
  formularioEvento: FormGroup;

  public casa() {
    return this.casas.id && this.casas.nome;
  }

  getEvento() {
    this.eventoService.getEvento().subscribe(eventos => this.eventos = eventos);
  }

  constructor(private eventoService: EventoService, private fb: FormBuilder) { }
  ngOnInit() {
    this.getEvento();
    this.criarFormularioEvento();
  }

  getEventoCasa() {
    this.event.casaId = this.casasId.id;
  }

  enviarDados() {
    const dadosFormulario = this.formularioEvento.value;

    const event = new Evento(
      dadosFormulario.nome,
      dadosFormulario.descricao,
      dadosFormulario.quantidade,
      dadosFormulario.preco,
      dadosFormulario.data,
      dadosFormulario.casasId,
    );

    this.eventoService.save(event).subscribe();

    alert(' O Evento foi cadastrado com sucesso.');
    this.formularioEvento.reset();

    //window.location.reload();
  }

  criarFormularioEvento() {
    this.formularioEvento = this.fb.group({
      nome: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ])
        ],
      descricao: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(1000)
        ])
        ],
      quantidade: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100000)
        ])
      ],
      preco: ['', Validators.compose([Validators.required])],
      data: ['', Validators.compose([Validators.required])],
      casaId: ['', Validators.compose([Validators.required])]
    });
  }

  get nome() {
    return this.formularioEvento.get('nome');
  }
  get descricao() {
    return this.formularioEvento.get('descricao');
  }
  get quantidade() {
    return this.formularioEvento.get('quantidade');
  }
  get preco() {
    return this.formularioEvento.get('preco');
  }
  get data() {
    return this.formularioEvento.get('data');
  }
  get casaId() {
    return this.formularioEvento.get('casaId');
  }
}
