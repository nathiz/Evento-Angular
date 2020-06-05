import { ReactiveFormsModule } from '@angular/forms';
import { CasasService } from './casas.service';
import { CasasComponent } from './casas.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CasasComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CasasComponent
  ],
  providers: [
    CasasService
  ]
})
export class CasasModule { }
