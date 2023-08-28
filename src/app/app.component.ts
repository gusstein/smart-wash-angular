import { Component } from '@angular/core';
import { AgendamentoComponent } from '../app/components/agendamento/agendamento.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Smart Wash';
  empresa: boolean = false;

  constructor(private router: Router){}
  
  sair(){
    this.router.navigate(['']);
    localStorage.removeItem('usuario');
    localStorage.removeItem('empresa');
  }

  usuarioAtual(){
    this.empresa = localStorage.getItem("empresa") === 'true' ? true : false;
    return localStorage.getItem("usuario")
  }
}
