import { Component } from '@angular/core';
import { Servico } from 'src/app/model/servico';
import { ServicoService } from 'src/app/services/servico.service';

@Component({
  selector: 'app-cadastrar-servicos',
  templateUrl: './cadastrar-servicos.component.html',
  styleUrls: ['./cadastrar-servicos.component.css']
})
export class CadastrarServicosComponent {
  constructor(private servicoService: ServicoService) {}

  ngOnInit(): void {

  }

  servicos: any[] = [];
  nomeServico: string = '';
  preco: number = 0;
  duracaoServico: number = 0;
  descricaoServico: string = ''

  adicionarServico(): void {
    const servico = {
      nome: this.nomeServico,
      preco: this.preco,
      duracao: this.duracaoServico,
      descricao: this.descricaoServico
    };

    this.servicos.push(servico);
    this.nomeServico = '';
    this.preco = 0;
    this.duracaoServico = 0;
    this.descricaoServico = '';
  }

  salvarServicos(): void {
    this.servicos.forEach((servico: Servico) => {
      this.servicoService.salvarServico(servico).subscribe(
        (servicoSalvo: Servico) => {
          console.log(`Serviço ${servicoSalvo.nome} salvo com sucesso!`);
          this.servicos = [];
        },
        (error: any) => {
          console.error('Erro ao salvar serviço:', error);
        }
      );
    });
  }
}

