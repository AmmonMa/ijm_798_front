
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarEscolasComponent } from './@pages/listar-escolas/listar-escolas.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'escolas'
  },
  { path: 'escolas', component: ListarEscolasComponent, data: { title: 'Listar Escolas' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
