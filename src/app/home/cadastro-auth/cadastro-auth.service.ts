import { Observable } from 'rxjs';
import { Login } from './../login/login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class CadastroAuthService {
  constructor(private http: HttpClient) {}

  /*Metodo que faz um POST para API back-end cadastrando o usuário passado como parametro*/
  cadastro(userAuth: Login): Observable<any> {
    return this.http.post(`${API}/auth/cadastro`, userAuth);
  }
}
