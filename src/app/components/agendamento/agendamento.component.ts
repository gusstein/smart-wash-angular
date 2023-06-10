import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from 'src/app/services/agendamento.service';


@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit{

  constructor(private agendamentoService: AgendamentoService) {

  }

  ngOnInit(): void {

  }

  servicos: any[] = [
    { id: 1, nome: 'Serviço 1', valor: 10, duracao: 30 },
    { id: 2, nome: 'Serviço 2', valor: 20, duracao: 60 },
    { id: 3, nome: 'Serviço 3', valor: 30, duracao: 90 }
  ];

  servicosAdicionados: any[] = [];
  servicoSelecionado: any;

  adicionarServico(): void {
    if (this.servicoSelecionado) {
      this.servicosAdicionados.push(this.servicoSelecionado);
      this.servicoSelecionado = null; // Limpa a seleção do <select>
    }
  }

  calcularValorTotalServicos(): number {
    let total = 0;
    for (const servico of this.servicosAdicionados) {
      total += servico.valor;
    }
    return total;
  }

  calcularDuracaoTotalServicos(): number {
    let total = 0;
    for (const servico of this.servicosAdicionados) {
      total += servico.duracao;
    }
    return total;
  }

  salvarAgendamento(): void {
    // Lógica para salvar o agendamento
  }
}
