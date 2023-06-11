import { Component, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/model/agendamento';
import { Funcionario } from 'src/app/model/funcionario';
import { Servico } from 'src/app/model/servico';
import { Veiculo } from 'src/app/model/veiculo';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { ServicoService } from 'src/app/services/servico.service';
import { VeiculoService } from 'src/app/services/veiculo.service';


@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit{
  servicos: Servico[] = [];
  listaVeiculos: Veiculo[] = [];
  listaFuncionariosDisponiveis: Funcionario[] = [];
  servicosAdicionados: Servico[] = [];
  servicoSelecionado: any;
  veiculoSelecionado: any;

  constructor(private agendamentoService: AgendamentoService, private servicoService: ServicoService, private veiculoService: VeiculoService, private funcioanrioService: FuncionarioService) {

  }

  ngOnInit(): void {
    this.carregarServicos();
    this.carregarVeiculosCliente();
    this.carregaFuncionariosDisponiveis();

  }
  carregarVeiculosCliente() {
    this.veiculoService.listarTodosVeiculos().subscribe(
      (servicos: Veiculo[]) => {
        this.listaVeiculos = servicos
      },
      (error: any) => {
        // Lidar com erros, se houver algum
        console.error('Erro ao carregar serviços:', error);
      }
    );
  }

  carregaFuncionariosDisponiveis() {
    this.funcioanrioService.listarTodosFuncionarios().subscribe(
      (funcionario: Funcionario[]) => {
        this.listaFuncionariosDisponiveis = funcionario
        console.log(this.listaFuncionariosDisponiveis);
      },
      (error: any) => {
        // Lidar com erros, se houver algum
        console.error('Erro ao carregar serviços:', error);
      }
    );
  }

  carregarServicos(): void {
    this.servicoService.listarTodosServicos().subscribe(
      (servicos: Servico[]) => {
        this.servicos = servicos
      },
      (error: any) => {
        // Lidar com erros, se houver algum
        console.error('Erro ao carregar serviços:', error);
      }
    );
  }

  adicionarServico(): void {
    if (this.servicoSelecionado) {
      this.servicosAdicionados.push(this.servicoSelecionado);
      this.servicoSelecionado = null; // Limpa a seleção do <select>
    }
  }

  calcularValorTotalServicos(): number {
    let total = 0;
    for (const servico of this.servicosAdicionados) {
      total += servico.preco;
    }
    return total;
  }

  calcularDuracaoTotalServicos(): number {
    let total = 0;
    for (const servico of this.servicosAdicionados) {
      total += parseInt(servico.duracao, 10);
    }
    return total;
  }

  salvarAgendamento(): void {
    const agendamento: Agendamento = {
      id: 0, // O ID será gerado pelo servidor
      veiculos: this.listaVeiculos.filter(veiculo => veiculo),
      servicos: this.servicosAdicionados,
      funcionarios: this.listaFuncionariosDisponiveis.filter(funcionario => funcionario),
      preco: this.calcularValorTotalServicos(),
      dataEntrada: new Date(), // Defina a data de entrada conforme necessário
      dataSaida: new Date() // Defina a data de saída conforme necessário
    };
  
    this.agendamentoService.salvarAgendamento(agendamento).subscribe(
      (resposta: Agendamento) => {
        console.log('Agendamento salvo com sucesso:', resposta);
        // Realize as ações necessárias após o salvamento do agendamento
      },
      (error: any) => {
        console.error('Erro ao salvar agendamento:', error);
        // Lidar com erros, se houver algum
      }
    );
  }

  cancelarAgendamento() {
    this.servicosAdicionados = [];
  }
}
