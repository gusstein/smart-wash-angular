import { Component } from '@angular/core';

@Component({
  selector: 'app-pagamento-agendamento',
  templateUrl: './pagamento-agendamento.component.html',
  styleUrls: ['./pagamento-agendamento.component.css']
})
export class PagamentoAgendamentoComponent {
  adicionarFormaPagamento(): void {
    // this.veiculoService.salvarVeiculo(this.veiculo).subscribe(
    //   (veiculoSalvo: Veiculo) => {
    //     console.log(`Veículo ${veiculoSalvo.modelo} salvo com sucesso!`);
    //     this.veiculo = {
    //       id: 0,
    //       modelo: '',
    //       marca: '',s
    //       ano: '',
    //       placa: '',
    //       carroceria: ''
    //     };
    //   },
    //   (error: any) => {
    //     console.error('Erro ao salvar veículo:', error);
    //   }
    // );
  }
}
