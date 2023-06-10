import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = 'api/usuarios'

  constructor(private httpClient: HttpClient) { }

  listarTodosUsuarios() {
    return this.httpClient.get<Usuario[]>(this.API)
      .pipe(
        first(),
      );
  }

  loadById(id: string) {
    return this.httpClient.get<Usuario>(`${this.API}/${id}`);
  }

  salvarUsuario(usuario: Partial<Usuario>) {
    // console.log(Usuario);
    if (usuario.id) {
      // console.log('update');
      return this.atualizarUsuario(usuario);
    }
    // console.log('create');
    return this.atualizarUsuario(usuario);
  }

  private criarUsuario(usuario: Partial<Usuario>) {
    return this.httpClient.post<Usuario>(this.API, usuario).pipe(first());
  }

  private atualizarUsuario(usuario: Partial<Usuario>) {
    return this.httpClient.put<Usuario>(`${this.API}/${usuario.id}`, usuario).pipe(first());
  }

  removerUsuario(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }


}
