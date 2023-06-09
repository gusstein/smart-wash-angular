import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
  //cliente = 0 | funcionario = 1
  perfil!: number;
  titulo: string = "";
  listaServicos: string[] = [];
  listaServicosAgendados: string[] = [];
  listaAgendamentos: string[] = [];

  ngOnInit(): void {
    this.verificarPerfil();
    if(this.perfil == 0) {
      this.carregarServicos(); // Chame o método para carregar os serviços
    } else {
      this.carregarServicos();
    }

    console.log(this.perfil);
  }

  verificarPerfil(): void {
    if (this.perfil === 1) {
      this.titulo = 'LISTA DE SERVIÇOS AGENDADOS';
    } else {
      this.titulo = 'SERVIÇOS AUTOMOTIVOS';
      this.perfil = 0;
    }
  }

  carregarServicos(): void {
  }

  carregarAgendamentos(): void {
  }


  trocarPerfilCliente(){
    this.perfil = 0;
    this.ngOnInit();
  }

  trocarPerfilFuncionario( ) {
    this.perfil = 1;
    this.ngOnInit();
  }

  abrirTelaAgendamentos() {
    
  }
}
