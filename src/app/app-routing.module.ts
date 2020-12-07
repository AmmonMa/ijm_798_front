import { EditarEscolaComponent } from './@pages/editar-escola/editar-escola.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarEscolaComponent } from './@pages/criar-escola/criar-escola.component';
import { ListarEscolasComponent } from './@pages/listar-escolas/listar-escolas.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'escolas'
  },
  { path: 'escolas', component: ListarEscolasComponent, data: { title: 'Listar Escolas' } },
  { path: 'criar-escola', component: CriarEscolaComponent, data: { title: 'Criar Escola' } },
  { path: 'editar-escola/:id', component: EditarEscolaComponent, data: { title: 'Editar Escola' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
