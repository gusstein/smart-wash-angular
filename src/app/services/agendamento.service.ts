import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agendamento } from '../model/agendamento';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  private readonly API = 'api/agendamentos'

  constructor(private httpClient: HttpClient) { }

  listarTodosAgendamentos() {
    return this.httpClient.get<Agendamento[]>(this.API)
      .pipe(
        first(),
      );
  }

  loadById(id: string) {
    return this.httpClient.get<Agendamento>(`${this.API}/${id}`);
  }

  salvarAgendamento(agendamento: Partial<Agendamento>) {
    // console.log(Agendamento);
    if (agendamento.id) {
      // console.log('update');
      return this.atualizarAgendamento(agendamento);
    }
    // console.log('create');
    console.log(agendamento);
    return this.criarAgendamento(agendamento);
  }

  private criarAgendamento(agendamento: Partial<Agendamento>) {
    return this.httpClient.post<Agendamento>(this.API, agendamento).pipe(first());
  }

  private atualizarAgendamento(agendamento: Partial<Agendamento>) {
    return this.httpClient.put<Agendamento>(`${this.API}/${agendamento.id}`, agendamento).pipe(first());
  }

  removerAgendamento(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }


}
