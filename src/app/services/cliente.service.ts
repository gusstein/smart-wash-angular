import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly API = 'api/clientes'

  constructor(private httpClient: HttpClient) { }

  listarTodosClientes() {
    return this.httpClient.get<Cliente[]>(this.API)
      .pipe(
        first(),
      );
  }

  loadById(id: string) {
    return this.httpClient.get<Cliente>(`${this.API}/${id}`);
  }

  salvarCliente(cliente: Partial<Cliente>) {
    // console.log(Cliente);
    if (cliente.id) {
      // console.log('update');
      return this.atualizarCliente(cliente);
    }
    // console.log('create');
    return this.atualizarCliente(cliente);
  }

  private criarCliente(cliente: Partial<Cliente>) {
    return this.httpClient.post<Cliente>(this.API, cliente).pipe(first());
  }

  private atualizarCliente(cliente: Partial<Cliente>) {
    return this.httpClient.put<Cliente>(`${this.API}/${cliente.id}`, cliente).pipe(first());
  }

  removerCliente(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }


}
