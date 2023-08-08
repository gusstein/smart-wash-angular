import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
  registrarUsuario(): void {
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
