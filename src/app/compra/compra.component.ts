import { Component, OnInit } from '@angular/core';
import { CompraService } from './compra.service';
import { Compra } from './compra.models';
import { Evento } from '../evento/evento.models';
import { Usuario } from '../usuario/usuario.models';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})

export class CompraComponent implements OnInit {

  private urlCompra = 'http://localhost:8080/api/compra';
  formularioCompra: FormGroup;
  compra: Compra[];
  compras: Compra;

  getCompraEvento() {
    this.compras.eventoId = this.compras.eventosId.id;
  }

  getCompraUsuario() {
    this.compras.usuarioId = this.compras.usuariosId.id;
  }

  getCompra() {
    this.compraService.getCompra().subscribe(compra => this.compra = compra);
  }

  constructor(private compraService: CompraService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getCompra();
    this.criarFormularioCompra();
  }

  enviarDados() {
    const dadosFormulario = this.formularioCompra.value;

    const compra = new Compra(
      dadosFormulario.eventoId,
      dadosFormulario.usuarioId,
      dadosFormulario.quantidade,
      dadosFormulario.total,
    );

    this.compraService.save(compra).subscribe();

    alert(' A Compra foi efetuada com sucesso.');
    this.formularioCompra.reset();

    //window.location.reload();
  }

  criarFormularioCompra() {
    this.formularioCompra = this.fb.group({
      eventoId: ['', Validators.compose([Validators.required])],
      usuarioId: ['', Validators.compose([Validators.required])],
      quantidade: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100000)
        ])
      ],
      total: ['', Validators.compose([Validators.required])]
    });
  }

  get eventoId() {
   return this.formularioCompra.get('eventoId');
  }
  get usuarioId() {
    return this.formularioCompra.get('usuarioId');
  }
  get quantidade() {
    return this.formularioCompra.get('quantidade');
  }
  get total() {
    return this.formularioCompra.get('total');
  }
}
