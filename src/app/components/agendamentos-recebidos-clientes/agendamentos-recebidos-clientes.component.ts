import { Component } from '@angular/core';
import { Agendamento } from 'src/app/model/agendamento';
import { Servico } from 'src/app/model/servico';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-agendamentos-recebidos-clientes',
  templateUrl: './agendamentos-recebidos-clientes.component.html',
  styleUrls: ['./agendamentos-recebidos-clientes.component.css']
})
export class AgendamentosRecebidosClientesComponent {
  titulo: string = "Agendamentos Realizados"

  listaAgendamentos: Agendamento[] = [];
  precoTotal: string = ''
  
  constructor(private agendamentoService: AgendamentoService) {
  
  }
  
  ngOnInit(): void {
  
    this.carregarAgendamentos();
    this.calculaPrecoTotal();
  
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
  
  
  calculaPrecoTotal(): void {
    this.listaAgendamentos.forEach((agendamento: Agendamento) => {
      const precoTotal = agendamento.servicos.reduce((total: number, servico: Servico) => total + servico.preco, 0);
      this.precoTotal = precoTotal.toString();
    });
  }
}
