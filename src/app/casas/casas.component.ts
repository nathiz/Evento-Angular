import { Casas } from './casas.models';
import { Component, OnInit } from '@angular/core';
import { CasasService } from './casas.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.css']
})

export class CasasComponent implements OnInit {

  private urlCasas = 'http://localhost:8080/api/casas';

  formularioCasas: FormGroup;
  casas: Casas[];

  getCasas() {
    this.casasService.getCasas().subscribe(casas => this.casas = casas);
  }

  constructor(private casasService: CasasService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getCasas();
    this.criarFormularioCasas();
  }

  enviarDados() {
    const dadosFormulario = this.formularioCasas.value;

    const casa = new Casas(
      dadosFormulario.nome,
      dadosFormulario.endereco,
      dadosFormulario.capacidade
    );

    this.casasService.save(casa).subscribe();

    alert(' A Casa de Show foi cadastrada com sucesso.');
    this.formularioCasas.reset();

    window.location.reload();
  }

  criarFormularioCasas() {
    this.formularioCasas = this.fb.group({
      nome: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ])
        ],
      endereco: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(300)
        ])
        ],
      capacidade: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100000)
        ])
      ],
    });
  }

  get nome() {
    return this.formularioCasas.get('nome');
  }
  get endereco() {
    return this.formularioCasas.get('endereco');
  }
  get capacidade() {
    return this.formularioCasas.get('capacidade');
  }
}
