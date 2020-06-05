import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasasComponent } from './casas/casas.component';
import { EventoComponent } from './evento/evento.component';
import { CompraComponent } from './compra/compra.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

const routes: Routes = [
  {path: 'detalhes/:id', component: DetalhesComponent},
  {path: 'eventos', component: EventoComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'casas', component: CasasComponent},
  {path: 'compra', component: CompraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
