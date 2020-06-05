import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Compra } from './compra.models';

@Injectable({
  providedIn: 'root'
})

export class CompraService {

  private urlCompra: string;
  private urlCompraDeletar: string;
  private urlCompraSalvar: string;


  getCompra() {
    return this.findAll();
  }

  constructor(private http: HttpClient) {
    this.urlCompra = 'http://localhost:8080/api/compra';
    this.urlCompraDeletar = 'http://localhost:8080/api/compra/deletar/{id}';
    this.urlCompraSalvar = 'http://localhost:8080/api/compra/salvar';
  }

  public findAll(): Observable<Compra[]> {
    return this.http.get<Compra[]>(this.urlCompra);
  }

  public findById(id: number): Observable<Compra> {
    return this.http.get<Compra>(this.urlCompra + '/' + id);
  }

  public save(compra: Compra): Observable<Compra> {
    return this.http.post<Compra>(this.urlCompraSalvar, compra);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(this.urlCompraDeletar + '/' + id);
  }
}
