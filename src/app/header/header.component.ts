import { CompraService } from './../compra/compra.service';
import { CasasService } from './../casas/casas.service';
import { UsuarioService } from './../usuario/usuario.service';
import { EventoService } from './../evento/evento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private eventoService: EventoService, private usuarioService: UsuarioService, private casasService: CasasService) {}

  ngOnInit(): void {
  }

}
