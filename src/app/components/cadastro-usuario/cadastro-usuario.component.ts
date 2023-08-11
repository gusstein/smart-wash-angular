import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
  usuario: Usuario = {
    id: 0,
    nome: '',
    cpf: '',
    senha: '',
    email: ''
  };

  constructor(private usuarioService: UsuarioService) {}
  
  registrarUsuario(): void {
    this.usuarioService.criarUsuario(this.usuario).subscribe(
      (usuario: Usuario) => {
        console.log(`Usuario ${this.usuario.nome} salvo com sucesso!`);
        this.usuario = {
          id: 0,
          nome: '',
          cpf: '',
          senha: '',
          email: ''
        };
      },
      (error: any) => {
        console.error('Erro ao salvar usuario:', error);
      }
    );
  }

}
