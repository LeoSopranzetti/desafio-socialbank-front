import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class NovoUserService {
  constructor(private http: HttpClient) {}

  /*Metodo que faz um request POST para a API back-end com um usuário em seu body */
  save(user: User): Observable<User> {
    return this.http.post<User>(`${API}/user/cadastro`, user);
  }
}
