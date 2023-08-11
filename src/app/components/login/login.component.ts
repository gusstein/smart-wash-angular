import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginLiberado: boolean = false
  usuario: Usuario = {
    id: 0,
    nome: '',
    cpf: '',
    senha: '',
    email: ''
  };

  constructor(private usuarioService: UsuarioService) {}
  
  login(): void {
    this.usuarioService.login(this.usuario).subscribe(
      (mensagem: string) => {
        this.loginLiberado = mensagem === "1" ? true : false;
        this.usuario = {
          id: 0,
          nome: '',
          cpf: '',
          senha: '',
          email: ''
        };
      },
      (error: any) => {
        console.error('Credenciais erradas', error);
      }
    );
  }
}
