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

  constructor(private router: Router){}
  
  sair(){
    this.router.navigate(['']);
    localStorage.removeItem('usuario');
    localStorage.removeItem('empresa');
  }

  usuarioAtual(){
    return localStorage.getItem("usuario")
  }
}
