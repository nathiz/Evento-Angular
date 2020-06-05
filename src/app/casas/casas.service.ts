import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Casas } from './casas.models';

@Injectable({
  providedIn: 'root'
})

export class CasasService {

  private urlCasas: string;

  getCasas() {
    return this.findAll();
  }

  constructor(private http: HttpClient) {
    this.urlCasas = 'http://localhost:8080/api/casas';
  }

  public findAll(): Observable<Casas[]> {
    return this.http.get<Casas[]>(this.urlCasas);
  }

  public findById(id: number): Observable<Casas> {
    return this.http.get<Casas>(this.urlCasas + '/' + id);
  }

  public save(casas: Casas): Observable<Casas> {
    return this.http.post<Casas>(this.urlCasas, casas);
  }

  public update(casas: Casas): Observable<Casas> {
    return this.http.put<Casas>(this.urlCasas, casas);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(this.urlCasas + '/' + id);
  }
}
