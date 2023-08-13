import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    email: '',
    empresa:false
  };

  constructor(private usuarioService: UsuarioService, private router: Router) {}
  
  login(): void {
    this.usuarioService.login(this.usuario).subscribe(
      (usuario: Usuario) => {
        localStorage.setItem('empresa', usuario.empresa.toString());
        localStorage.setItem('usuario', usuario.nome);
      
        this.usuario = {
          id: 0,
          nome: '',
          cpf: '',
          senha: '',
          email: '',
          empresa:false
        };

        if(usuario.nome != null ||usuario.nome != undefined){
          this.router.navigate(['/servicos']);
        } else {
          console.error('Credenciais erradas');
        }
      },
      (error: any) => {
        console.error('Credenciais erradas', error);
      }
    );
  }
}
