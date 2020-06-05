import { CompraService } from './compra.service';
import { CompraComponent } from './compra.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CompraComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CompraComponent
  ],
  providers: [
    CompraService
  ]
})
export class CompraModule { }
