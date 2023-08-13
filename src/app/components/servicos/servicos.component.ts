import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Servico } from 'src/app/model/servico';
import { ServicoService } from 'src/app/services/servico.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
  //cliente = 0 | funcionario = 1
  perfil!: number;
  titulo: string = "";
  listaServicos: Servico[] = [];
  listaServicosAgendados: string[] = [];
  listaAgendamentos: string[] = [];

  constructor(private servicoService: ServicoService) {

  }

  ngOnInit(): void {
    this.verificarPerfil();
    if(this.perfil == 0) {
      this.carregarServicos();
    } else {
      this.carregarServicos();
    }

    console.log(this.perfil);
  }

  verificarPerfil(): void {
    if (localStorage.getItem("empresa") == 'true') {
      this.perfil = 1;
      this.titulo = 'LISTA DE SERVIÇOS';
    } else {
      this.titulo = 'SERVIÇOS AUTOMOTIVOS';
      this.perfil = 0;
    }
  }

  carregarServicos(): void {
    this.servicoService.listarTodosServicos().subscribe(
      (servicos: Servico[]) => {
        this.listaServicos = servicos
      },
      (error: any) => {
        console.error('Erro ao carregar serviços:', error);
      }
    );
  }

  trocarPerfilCliente(){
    this.perfil = 0;
    this.ngOnInit();
  }

  trocarPerfilFuncionario( ) {
    this.perfil = 1;
    this.ngOnInit();
  }

}
