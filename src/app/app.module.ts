import { TurmaFormResolver } from './@pages/turma/turma-form/turma-form.resolver';
import { NgModule } from '@angular/core';
import { SharedModule } from './@shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './@core/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgProgressModule } from 'ngx-progressbar';
import { TextMaskModule } from 'angular2-text-mask';

import { TurmaFormComponent } from './@pages/turma/turma-form/turma-form.component';
import { TurmaTableComponent } from './@pages/turma/turma-table/turma-table.component';
import { EscolaTableComponent } from './@pages/escola/escola-table/escola-table.component';
import { EscolaFormResolver } from './@pages/escola/escola-form/escola-form.resolver';
import { EscolaFormComponent } from './@pages/escola/escola-form/escola-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EscolaFormComponent,
    EscolaTableComponent,
    TurmaFormComponent,
    TurmaTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    FlexLayoutModule,
    NgProgressModule,
    TextMaskModule
  ],
  providers: [ EscolaFormResolver, TurmaFormResolver ],
  bootstrap: [AppComponent]
})
export class AppModule { }
