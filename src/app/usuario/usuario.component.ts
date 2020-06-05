import { Usuario } from './usuario.models';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  private urlUsuario = 'http://localhost:8080/api/usuario';

  formularioUsuario: FormGroup;
  usuario: Usuario[];

  getUsuario() {
    this.usuarioService.getUsuario().subscribe(usuario => this.usuario = usuario);
  }

  constructor(private usuarioService: UsuarioService, private fb: FormBuilder) {  }

  ngOnInit(): void {
    this.getUsuario();
    this.criarFormularioUsuario();
  }

  enviarDados() {
    const dadosFormulario = this.formularioUsuario.value;

    const user = new Usuario(
      dadosFormulario.nome,
      dadosFormulario.sobrenome,
      dadosFormulario.email,
      dadosFormulario.telefone,
      dadosFormulario.senha
    );

    this.usuarioService.save(user).subscribe();

    alert(' O usuario foi cadastrado com sucesso.');
    this.formularioUsuario.reset();

    window.location.reload();
  }

  criarFormularioUsuario() {
    this.formularioUsuario = this.fb.group({
      nome: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ])
        ],
      sobrenome: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ])
        ],
      email: ['', Validators.compose([Validators.email])],
      telefone: ['', Validators.compose([Validators.required])],
      senha: ['', Validators.compose([Validators.required])]
    });
  }

  get nome() {
    return this.formularioUsuario.get('nome');
  }
  get sobrenome() {
    return this.formularioUsuario.get('sobrenome');
  }
  get email() {
    return this.formularioUsuario.get('email');
  }
  get telefone() {
    return this.formularioUsuario.get('telefone');
  }
  get senha() {
    return this.formularioUsuario.get('senha');
  }
}
