import { ReactiveFormsModule } from '@angular/forms';
import { DetalhesService } from './detalhes.service';
import { DetalhesComponent } from './detalhes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DetalhesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DetalhesComponent
  ],
  providers: [
    DetalhesService
  ]

})
export class DetalhesModule { }
