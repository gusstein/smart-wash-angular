import { Component } from '@angular/core';
import { Veiculo } from 'src/app/model/veiculo';
import { VeiculoService } from 'src/app/services/veiculo.service';


@Component({
  selector: 'app-cadastrar-veiculo',
  templateUrl: './cadastrar-veiculo.component.html',
  styleUrls: ['./cadastrar-veiculo.component.css']
})
export class CadastrarVeiculoComponent {
  veiculo: Veiculo = {
    id: 0,
    modelo: '',
    marca: '',
    ano: '',
    placa: '',
    carroceria: ''
  };

  constructor(private veiculoService: VeiculoService) {}

  salvarVeiculo(): void {
    this.veiculoService.salvarVeiculo(this.veiculo).subscribe(
      (veiculoSalvo: Veiculo) => {
        console.log(`Veículo ${veiculoSalvo.modelo} salvo com sucesso!`);
        this.veiculo = {
          id: 0,
          modelo: '',
          marca: '',
          ano: '',
          placa: '',
          carroceria: ''
        };
      },
      (error: any) => {
        console.error('Erro ao salvar veículo:', error);
      }
    );
  }
}
