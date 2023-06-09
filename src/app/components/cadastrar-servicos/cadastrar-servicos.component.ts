import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar-servicos',
  templateUrl: './cadastrar-servicos.component.html',
  styleUrls: ['./cadastrar-servicos.component.css']
})
export class CadastrarServicosComponent {
  servicos: any[] = [];
  nomeServico: string = '';
  valorServico: number = 0;
  duracaoServico: number = 0;

  adicionarServico(): void {
    const servico = {
      nome: this.nomeServico,
      valor: this.valorServico,
      duracao: this.duracaoServico
    };

    this.servicos.push(servico);
    this.nomeServico = '';
    this.valorServico = 0;
    this.duracaoServico = 0;
  }

  salvarServicos():void {

  }
}

