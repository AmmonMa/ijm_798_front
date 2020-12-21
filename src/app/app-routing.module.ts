import { UploadComponent } from './@pages/upload/upload.component';
import { TurmaFormResolver } from './@pages/turma/turma-form/turma-form.resolver';
import { TurmaFormComponent } from './@pages/turma/turma-form/turma-form.component';
import { TurmaTableComponent } from './@pages/turma/turma-table/turma-table.component';
import { EscolaTableComponent } from './@pages/escola/escola-table/escola-table.component';
import { EscolaFormResolver } from './@pages/escola/escola-form/escola-form.resolver';
import { EscolaFormComponent } from './@pages/escola/escola-form/escola-form.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'escolas'
  },
  { path: 'escolas', component: EscolaTableComponent, data: { title: 'Listar Escolas' } },
  { path: 'criar-escola', component: EscolaFormComponent, data: { title: 'Criar Escola' } },
  {
    path: 'editar-escola/:id',
    component: EscolaFormComponent,
    data: { title: 'Editar Escola' },
    resolve: { escola: EscolaFormResolver }
  },
  { path: 'turmas/:id', component: TurmaTableComponent, data: { title: 'Listar Turmas da Escola' } },
  { path: 'criar-turma/:escolaId', component: TurmaFormComponent, data: { title: 'Criar Turma para Escola' } },
  {
    path: 'editar-turma/:turmaId',
    component: TurmaFormComponent,
    data: { title: 'Editar Turma' },
    resolve: { turma: TurmaFormResolver }
  },
  { path: 'importar', component: UploadComponent, data: {title: 'Importar Escolas' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
