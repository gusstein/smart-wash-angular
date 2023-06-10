import { Injectable } from '@angular/core';
import { Funcionario } from '../model/funcionario';
import { first } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private readonly API = 'api/funcionarios'

  constructor(private httpClient: HttpClient) { }

  listarTodosFuncionarios() {
    return this.httpClient.get<Funcionario[]>(this.API)
      .pipe(
        first(),
      );
  }

  loadById(id: string) {
    return this.httpClient.get<Funcionario>(`${this.API}/${id}`);
  }

  salvarFuncionario(funcionario: Partial<Funcionario>) {
    // console.log(Funcionario);
    if (funcionario.id) {
      // console.log('update');
      return this.atualizarFuncionario(funcionario);
    }
    // console.log('create');
    return this.atualizarFuncionario(funcionario);
  }

  private criarFuncionario(funcionario: Partial<Funcionario>) {
    return this.httpClient.post<Funcionario>(this.API, funcionario).pipe(first());
  }

  private atualizarFuncionario(funcionario: Partial<Funcionario>) {
    return this.httpClient.put<Funcionario>(`${this.API}/${funcionario.id}`, funcionario).pipe(first());
  }

  removerFuncionario(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }


}
