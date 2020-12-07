import { CriarTurmaComponent } from './@pages/criar-turma/criar-turma.component';
import { ListarTurmasComponent } from './@pages/listar-turmas/listar-turmas.component';
import { EditarEscolaComponent } from './@pages/editar-escola/editar-escola.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarEscolaComponent } from './@pages/criar-escola/criar-escola.component';
import { ListarEscolasComponent } from './@pages/listar-escolas/listar-escolas.component';
import { EditarTurmaComponent } from './@pages/editar-turma/editar-turma.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'escolas'
  },
  { path: 'escolas', component: ListarEscolasComponent, data: { title: 'Listar Escolas' } },
  { path: 'criar-escola', component: CriarEscolaComponent, data: { title: 'Criar Escola' } },
  { path: 'editar-escola/:id', component: EditarEscolaComponent, data: { title: 'Editar Escola' } },
  { path: 'turmas/:id', component: ListarTurmasComponent, data: { title: 'Listar Turmas da Escola' } },
  { path: 'criar-turma/:id', component: CriarTurmaComponent, data: { title: 'Criar Turma para Escola' } },
  { path: 'editar-turma/:id', component: EditarTurmaComponent, data: { title: 'Editar Turma' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
