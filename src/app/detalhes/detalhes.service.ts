import { Detalhes } from './detalhes.models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DetalhesService {
  private urlDetalhes: string;

  getDetalhes() {
    return this.findAll();
  }

  constructor(private http: HttpClient) {
    this.urlDetalhes = 'http://localhost:8080/api/detalhes/eventos/{id}';
  }

  public findAll(): Observable<Detalhes[]> {
    return this.http.get<Detalhes[]>(this.urlDetalhes);
  }

  public findById(id: number): Observable<Detalhes> {
    return this.http.get<Detalhes>(this.urlDetalhes + '/' + id);
  }

  public update(detalhes: Detalhes): Observable<Detalhes> {
    return this.http.put<Detalhes>(this.urlDetalhes, detalhes);
  }
}

