import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendamentoComponent } from './components/agendamento/agendamento.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastrarServicosComponent } from './components/cadastrar-servicos/cadastrar-servicos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgendamentosClienteComponent } from './components/agendamentos-cliente/agendamentos-cliente.component';
import { CadastrarVeiculoComponent } from './components/cadastrar-veiculo/cadastrar-veiculo.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { PagamentoAgendamentoComponent } from './components/pagamento-agendamento/pagamento-agendamento.component';
import { RelatorioAgendamentosComponent } from './components/relatorio-agendamentos/relatorio-agendamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    AgendamentoComponent,
    ServicosComponent,
    CadastrarServicosComponent,
    AgendamentosClienteComponent,
    CadastrarVeiculoComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    PagamentoAgendamentoComponent,
    RelatorioAgendamentosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
