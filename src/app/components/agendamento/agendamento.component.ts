import { Component, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/model/agendamento';
import { Funcionario } from 'src/app/model/funcionario';
import { Servico } from 'src/app/model/servico';
import { Veiculo } from 'src/app/model/veiculo';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { ServicoService } from 'src/app/services/servico.service';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { ToastrService } from 'ngx-toastr';

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
  veiculoAdicionados: Veiculo[] = [];
  servicoSelecionado: any;
  dataEntrada: Date = new Date(); 
  veiculoSelecionado: any;
  erro: boolean = false;

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
        console.error('Erro ao carregar serviços:', error);
      }
    );
  }

  adicionarServico(): void {
    if (this.servicoSelecionado) {
      this.servicosAdicionados.push(this.servicoSelecionado);
      this.veiculoAdicionados.push(this.veiculoSelecionado);
      this.servicoSelecionado = null;
      this.veiculoSelecionado = null;
      this.dataEntrada = this.dataEntrada;
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
    const agendamento = {
      veiculos: this.veiculoAdicionados,
      servicos: this.servicosAdicionados,
      funcionarios: this.listaFuncionariosDisponiveis.filter(funcionario => funcionario),
      preco: this.calcularValorTotalServicos(),
      dataEntrada: this.dataEntrada, 
      dataSaida: new Date() 
    };

    this.servicosAdicionados = [];
    this.veiculoAdicionados = [];
    this.servicoSelecionado = null;
    this.veiculoSelecionado = null;
  
    this.agendamentoService.salvarAgendamento(agendamento).subscribe(
      (resposta: Agendamento) => {
        console.log('Agendamento salvo com sucesso:', resposta);


      },
      (error: any) => {

        console.error('Erro ao salvar agendamento:', error);
        this.erro = true;

        setTimeout(() => {
          this.erro = false;
        }, 5000);
      }
    );
  }

  cancelarAgendamento() {
    this.servicosAdicionados = [];
    this.veiculoAdicionados = [];
  }
}
