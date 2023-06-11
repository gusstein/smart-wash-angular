import { Component } from '@angular/core';
import { Agendamento } from 'src/app/model/agendamento';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-agendamentos-cliente',
  templateUrl: './agendamentos-cliente.component.html',
  styleUrls: ['./agendamentos-cliente.component.css']
})
export class AgendamentosClienteComponent {
titulo: string = "Seus agendamentos"

listaAgendamentos: Agendamento[] = [];

constructor(private agendamentoService: AgendamentoService) {

}

ngOnInit(): void {

  this.carregarAgendamentos();

}


carregarAgendamentos(): void {
  this.agendamentoService.listarTodosAgendamentos().subscribe(
    (agendamento: Agendamento[]) => {
      this.listaAgendamentos = agendamento
    },
    (error: any) => {
      console.error('Erro ao carregar serviços:', error);
    }
  );
}




}
