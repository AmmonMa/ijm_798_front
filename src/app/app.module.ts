import { EditarEscolaComponent } from './@pages/editar-escola/editar-escola.component';
import { CriarEscolaComponent } from './@pages/criar-escola/criar-escola.component';
import { ListarEscolasComponent } from './@pages/listar-escolas/listar-escolas.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListarEscolasComponent,
    CriarEscolaComponent,
    EditarEscolaComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
