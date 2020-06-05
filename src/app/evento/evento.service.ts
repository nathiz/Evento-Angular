import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from './evento.models';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  evento: Evento;
  private urlEvento: string;

  getEvento() {
    return this.findAll();
  }

  constructor(private http: HttpClient) {
    this.urlEvento = 'http://localhost:8080/api/eventos';
  }

  public findAll(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.urlEvento);
  }

  public findById(id: number): Observable<Evento> {
    return this.http.get<Evento>(this.urlEvento + '/' + id);
  }

  public save(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.urlEvento, evento);
  }

  public update(evento: Evento): Observable<Evento> {
    return this.http.put<Evento>(this.urlEvento, evento);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(this.urlEvento + '/' + id);
  }
}
