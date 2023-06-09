import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoComponent } from './components/agendamento/agendamento.component';
import { CadastrarServicosComponent } from './components/cadastrar-servicos/cadastrar-servicos.component';
import { ServicosComponent } from './components/servicos/servicos.component';

const routes: Routes = [
  { path: '', component: ServicosComponent},
  { path: 'realizar-agendamento', component: AgendamentoComponent},
  { path: 'cadastrar-servicos', component: CadastrarServicosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
