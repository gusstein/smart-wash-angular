import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servico } from '../model/servico';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private readonly API = 'api/servicos'

  constructor(private httpClient: HttpClient) { }

  listarTodosServicos() {
    return this.httpClient.get<Servico[]>(this.API)
      .pipe(
        first(),
      );
  }

  loadById(id: string) {
    return this.httpClient.get<Servico>(`${this.API}/${id}`);
  }

  salvarServico(servico: Partial<Servico>) {
    // console.log(servico);
    if (servico.id) {
      // console.log('update');
      return this.atualizarServico(servico);
    }
    // console.log('create');
    return this.criarServico(servico);
  }

  private criarServico(servico: Partial<Servico>) {
    return this.httpClient.post<Servico>(this.API, servico).pipe(first());
  }

  private atualizarServico(servico: Partial<Servico>) {
    return this.httpClient.put<Servico>(`${this.API}/${servico.id}`, servico).pipe(first());
  }

  removerServico(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }


}
