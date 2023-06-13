import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoComponent } from './components/agendamento/agendamento.component';
import { CadastrarServicosComponent } from './components/cadastrar-servicos/cadastrar-servicos.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { AgendamentosClienteComponent } from './components/agendamentos-cliente/agendamentos-cliente.component';
import { CadastrarVeiculoComponent } from './components/cadastrar-veiculo/cadastrar-veiculo.component';

const routes: Routes = [
  { path: '', component: ServicosComponent},
  { path: 'realizar-agendamento', component: AgendamentoComponent},
  { path: 'cadastrar-servicos', component: CadastrarServicosComponent},
  { path: 'meus-agendamentos', component: AgendamentosClienteComponent},
  { path: 'cadastrar-veiculos', component: CadastrarVeiculoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
