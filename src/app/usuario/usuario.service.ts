import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario.models';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlUsuario: string;

  getUsuario() {
    return this.findAll();
  }

  constructor(private http: HttpClient) {
    this.urlUsuario = 'http://localhost:8080/api/usuario';
  }

  public findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlUsuario);
  }

  public findById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(this.urlUsuario + '/' + id);
  }

  public save(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.urlUsuario, usuario);
  }

  public update(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.urlUsuario, usuario);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(this.urlUsuario + '/' + id);
  }
}
