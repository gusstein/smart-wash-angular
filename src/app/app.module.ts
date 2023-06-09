import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendamentoComponent } from './components/agendamento/agendamento.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastrarServicosComponent } from './components/cadastrar-servicos/cadastrar-servicos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AgendamentoComponent,
    ServicosComponent,
    CadastrarServicosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
