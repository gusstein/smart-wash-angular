import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veiculo } from '../model/veiculo';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  private readonly API = 'api/veiculos'

  constructor(private httpClient: HttpClient) { }

  listarTodosVeiculos() {
    return this.httpClient.get<Veiculo[]>(this.API)
      .pipe(
        first(),
      );
  }

  loadById(id: string) {
    return this.httpClient.get<Veiculo>(`${this.API}/${id}`);
  }

  salvarVeiculo(veiculo: Partial<Veiculo>) {
    // console.log(Veiculo);
    if (veiculo.id) {
      // console.log('update');
      return this.atualizarVeiculo(veiculo);
    }
    // console.log('create');
    return this.criarVeiculo(veiculo);
  }

  private criarVeiculo(veiculo: Partial<Veiculo>) {
    return this.httpClient.post<Veiculo>(this.API, veiculo).pipe(first());
  }

  private atualizarVeiculo(veiculo: Partial<Veiculo>) {
    return this.httpClient.put<Veiculo>(`${this.API}/${veiculo.id}`, veiculo).pipe(first());
  }

  removerVeiculo(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }


}
