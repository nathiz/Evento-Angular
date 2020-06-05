import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoComponent } from './evento.component';
import { EventoService } from './evento.service';

@NgModule({
  declarations: [
    EventoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    EventoComponent
  ],
  providers: [
    EventoService
  ]
})
export class EventoModule { }
